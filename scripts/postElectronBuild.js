const fs = require("fs-extra");

const { join } = require("path");
const { srcGraphicsPath, electronBuildPath } = require("./paths");

fs.copySync(srcGraphicsPath, join(electronBuildPath, "graphics"));
