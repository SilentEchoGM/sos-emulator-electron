const fs = require("fs-extra");
const { electronBuildPath } = require("./paths");

fs.emptyDirSync(electronBuildPath);
