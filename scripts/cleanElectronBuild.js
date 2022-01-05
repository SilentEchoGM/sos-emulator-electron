const fs = require("fs-extra");
const { electronBuildPath } = require("./paths");
const { exec } = require("child_process");

fs.removeSync(electronBuildPath);

fs.ensureDirSync(electronBuildPath);

const sudo = require("sudo-prompt");

const sudoOpts = {
  name: "SOS Emulator",
};

sudo.exec(
  'mklink /D "E:\\Projects\\sos-emulator\\app\\build\\electron\\graphics" "E:\\Projects\\sos-emulator\\graphics"',
  sudoOpts,
  (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
    console.log("Electron build folder cleaned.");
  }
);
