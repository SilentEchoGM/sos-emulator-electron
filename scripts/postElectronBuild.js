const fs = require("fs-extra");

const { join } = require("path");
const { srcGraphicsPath, electronBuildPath } = require("./paths");

fs.copySync(srcGraphicsPath, join(electronBuildPath, "graphics"));
fs.copySync(
  join(srcGraphicsPath, "sos-emu.ico"),
  join(electronBuildPath, "..", "icon.ico")
);
