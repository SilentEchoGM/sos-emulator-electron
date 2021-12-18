import { app, BrowserWindow } from "electron";
import { getLogger } from "./lib/logger";

const log = getLogger({ filepath: "electron/main.ts" });

const dev = process.env.NODE_ENV === "development";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      devTools: dev,
    },
    autoHideMenuBar: true,
    roundedCorners: true,
    title: "SOS Emulator",
  });

  win.loadURL(dev ? "http://localhost:3000" : "http://www.google.com");
};

app.whenReady().then(createWindow);
