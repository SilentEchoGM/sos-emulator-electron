const { join } = require("path");

module.exports = {
  svelteBuildPath: join(__dirname, "..", "build", "svelte"),
  electronBuildPath: join(__dirname, "..", "build", "electron"),
};
