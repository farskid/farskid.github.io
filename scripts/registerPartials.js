const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

fs.readdirSync(path.join(process.cwd(), "source/components")).forEach(
  (fileName) => {
    Handlebars.registerPartial(
      fileName,
      fs.readFileSync(path.join(process.cwd(), "source/components", fileName))
    );
  }
);
