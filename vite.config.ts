/*
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-05 16:55:10
 * @LastEditTime: 2023-06-06 18:21:14
 * @LastEditors: yeeChen
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import electronRender from "vite-plugin-electron-renderer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: "electron/index.ts",
    }),
    electronRender(),
  ],
});
