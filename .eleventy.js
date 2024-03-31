const toml = require('@iarna/toml');

module.exports = eleventyConfig => {
	eleventyConfig.addDataExtension("toml", contents => toml.parse(contents));
	eleventyConfig.ignores.add("README.md");
	eleventyConfig.addFilter("nodesc", obj => Object.fromEntries(
		Object.entries(obj).filter(([k, v]) => k != "desc")))
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("resources");
};
