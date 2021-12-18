const fs = require("fs-extra");
const { electronBuildPath } = require("./paths");

fs.removeSync(electronBuildPath);

console.log("Electron build folder cleaned.");
