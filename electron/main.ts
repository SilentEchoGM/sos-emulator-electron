import { app, BrowserWindow } from "electron";
import { getLogger } from "./lib/logger";
import { join } from "path";

const log = getLogger({ filepath: "electron/main.ts" });

const dev = process.env.NODE_ENV === "development";
const iconPath = join(__dirname, "graphics", "logo.png");

log.info(`Icon: ${iconPath}`);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 455,
    height: 820,
    webPreferences: {
      devTools: dev,
      contextIsolation: false,
      nodeIntegration: true,
    },
    backgroundColor: "#322214",
    icon: iconPath,
    autoHideMenuBar: true,
    roundedCorners: true,
    title: "SOS Emulator",
  });

  win.loadURL(dev ? "http://localhost:3000" : "http://www.google.com");
};

app.whenReady().then(createWindow);
