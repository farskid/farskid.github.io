const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// Partials
fs.readdirSync(path.join(process.cwd(), "source/components")).forEach(
  (fileName) => {
    const content = fs
      .readFileSync(path.join(process.cwd(), "source/components", fileName))
      .toString();
    console.log(`registering partial: ${path.parse(fileName).name}`);
    Handlebars.registerPartial(path.parse(fileName).name, content);
  }
);

// Handlebars.registerPartial({
//   header: `<header>
//     <img src="/feri.jpg" alt="Farzad Yousefzadeh" />
//     <h1>Farzad Yousefzadeh</h1>
//     <nav>
//         <ul>
//             <li><a href="/">About</a></li>
//             <li><a href="/cv">CV</a></li>
//             <li><a href="/talks">Talks</a></li>
//             <li><a href="/blog">Blog</a></li>
//         </ul>
//         <a>Follow @farzad_yz on Twitter</a>
//     </nav>
// </header>`,
// });

// Content
const talks = require("../content/talks.json");

function compileTemplate(templateName) {
  return fs.promises
    .readFile(path.join(process.cwd(), "source", `${templateName}.hbs`))
    .then((src) => src.toString());
}

function renderTemplateWithCtx(template, ctx) {
  return Handlebars.compile(template.toString())(ctx);
}

function copyHTMLToExportDir(templateName, html) {
  return fs.promises.writeFile(
    path.join(process.cwd(), "export", `${templateName}.html`),
    html
  );
}

const pagesWithCtx = [
  {
    name: "talks",
    context: path.join(process.cwd(), "content/talks.json"),
  },
  {
    name: "index",
  },
];

compileTemplate("talks")
  .then((template) => {
    return renderTemplateWithCtx(template, {
      talks: talks.filter((t) => t.type === "talk"),
    });
  })
  .then((html) => {
    return copyHTMLToExportDir("talks", html);
  });

compileTemplate("index")
  .then((template) => renderTemplateWithCtx(template, {}))
  .then((html) => copyHTMLToExportDir("index", html));

compileTemplate("cv")
  .then((template) => renderTemplateWithCtx(template, {}))
  .then((html) => copyHTMLToExportDir("cv", html));
