/*
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-05 17:03:42
 * @LastEditTime: 2023-06-06 17:35:46
 * @LastEditors: yeeChen
 */
import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const creatWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // 判断环境变量
  if (process.env.NODE_ENV != "development") {
    win.loadFile(path.join(__dirname, "..", "dist/index.html"));
  } else {
    win.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}`);
  }

  win.webContents.openDevTools();
  // 渲染进程到主进程，通过ipcMain.on接受
  ipcMain.on("message", (_, num) => {
    console.log(num, "来了");
  });

  // 主进程到渲染进程
  setTimeout(() => {
    win.webContents.send("load", { message: "初始化完成了" });
  }, 5000);
};

app.whenReady().then(creatWindow);
