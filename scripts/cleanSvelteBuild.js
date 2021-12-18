const fs = require("fs-extra");
const { svelteBuildPath } = require("./paths");

fs.removeSync(svelteBuildPath);

console.log("Svelte build folder cleaned.");
