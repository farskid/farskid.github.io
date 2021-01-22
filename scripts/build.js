// @ts-check
const fs = require("fs-extra");
const path = require("path");
const Handlebars = require("handlebars");
const { Remarkable } = require("remarkable");
const frontmatter = require("@github-docs/frontmatter");
const slugify = require("slugify");
const hljs = require("highlight.js");

const mdParser = new Remarkable({
  langPrefix: "hljs language-",
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ""; // use external default escaping
  },
});
const blogPostFrontmatterSchema = {
  properties: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      format: "date",
      required: true,
    },
    keywords: {
      type: ["string", "array"],
      required: true,
    },
  },
};

// Context containing site metadata, talks, blog posts, etc
// Note: blog posts are read and formatted by frontmatter automatically
async function prepareContext() {
  const dataDir = "content/data";
  const blogDir = "content/blog";
  const fileNames = await fs.promises.readdir(path.join(dataDir));
  const posts = await fs.promises.readdir(path.join(blogDir));

  const blogPosts = [];
  for (let post of posts) {
    const md = await (
      await fs.promises.readFile(path.join(blogDir, post))
    ).toString();
    const fmt = frontmatter(md, {
      schema: blogPostFrontmatterSchema,
      validateKeyNames: false,
      validateKeyOrder: false,
    });
    const mdWithoutFrontmatter = md.replace(/^---[\s\S]*---/, "");
    if (!fmt.errors.length) {
      const postData = {
        ...fmt.data,
        slug: slugify(fmt.data.title),
        md,
        html: mdParser.render(mdWithoutFrontmatter),
      };
      blogPosts.push(postData);
    } else {
      console.log(fmt.errors);
      console.error(`post ${post} has invalid frontmatter`);
    }
  }

  const data = fileNames.reduce((data, name) => {
    return {
      ...data,
      [path.parse(name).name]: require(path.join(process.cwd(), dataDir, name)), // JSON can be required
    };
  }, {});

  return {
    ...data,
    blogPosts: blogPosts.map((post, index) => {
      return {
        ...post,
        nextSlug:
          blogPosts[index + 1]?.title && slugify(blogPosts[index + 1].title),
        prevSlug:
          blogPosts[index - 1]?.title && slugify(blogPosts[index - 1].title),
      };
    }),
  };
}

function registerHelpers() {
  Handlebars.registerHelper("currentYear", () => new Date().getFullYear());
}

async function copyBlogPosts({ blogPosts, ...data }) {
  for (let post of Object.values(blogPosts)) {
    console.log(`writing blog post ${post.slug} to /export/blog`);
    // Same as writeFile but created parent dir if not exists
    const template = (
      await fs.promises.readFile(path.join("source/blogPost.hbs"))
    ).toString();
    // render each blog post with its own context
    const html = Handlebars.compile(template)({ post }).toString();
    await fs.outputFile(
      path.join(path.join("export/blog"), `${post.slug}.html`),
      html
    );
  }
}

async function copyAssets() {
  const from = path.join("content/assets");
  const to = path.join("export/assets");
  await fs.copy(from, to);
}

async function registerComponents(data) {
  const fileNames = await fs.promises.readdir(path.join("source/components"));
  for (let name of fileNames) {
    const template = (
      await fs.promises.readFile(path.join("source/components", name))
    ).toString();

    const partialName = path.parse(name).name;
    console.log(`registering partial: ${partialName}`);
    Handlebars.registerPartial(partialName, Handlebars.compile(template)(data));
  }
}

async function compilePages(data) {
  const pages = await fs.promises.readdir(path.join("source/pages"));
  for (let name of pages) {
    console.log(`compiling page ${name}`);
    const template = (
      await fs.promises.readFile(path.join("source/pages", name))
    ).toString();
    const html = Handlebars.compile(template)(data);

    console.log(`writing page ${name} to /export`);
    await fs.promises.writeFile(
      path.join("export", `${path.parse(name).name}.html`),
      html.toString()
    );
  }
}

(async function build() {
  try {
    const context = await prepareContext();
    console.log("registering helpers");
    registerHelpers();
    console.log("copying assets");
    await copyAssets();
    console.log("registering partials");
    await registerComponents(context);
    console.log("compiling templates");
    await compilePages(context);
    console.log("compiling blog posts");
    await copyBlogPosts(context);
  } catch (err) {
    console.error(err);
  }
})();
