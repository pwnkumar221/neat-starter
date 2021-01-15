const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // image processing

  // works also with addLiquidShortcode or addJavaScriptFunction
  eleventyConfig.addNunjucksAsyncShortcode("responsiveimage", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ['webp', 'jpeg'],
      urlPath: "./src/static/img/",
      outputDir: "./dist/static/img"
    });

    let lowsrc = metadata.jpeg[0];

    return `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
  });

  // breadcrumbs for navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/static/css/style.css": "./static/css/style.css",
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css": "./static/css/prism-tomorrow.css",
    "./src/static/css/*": "./static/css/"
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
  };
};
