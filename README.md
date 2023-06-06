<<<<<<< HEAD
<!--
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-05 16:55:10
 * @LastEditTime: 2023-06-06 18:32:48
 * @LastEditors: yeeChen
-->

# electron demo

## bug 记录

关于 npm i:由于某不可抗拒因素,我们初次下载或者打包时速度会极慢,我们可以采取以下两者方法,推荐后者

1.配置环境

2.开飞机

---

1.最新版本通过 vite 创建 electron 不需要在插件配置中申明 main 模块

<!-- vite.config.ts -->

```js
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: "electron/index.ts",
    }),
  ],
});
```

2.通过 isPackaged 判断环境打包后依旧会白屏,但是我看 issue 貌似是已经解决了这个问题。我们可以通过 process.env.NODE_ENV 来判断环境

<!-- electron/index.ts -->

```js
if (process.env.NODE_ENV != "development") {
  win.loadFile(path.join(__dirname, "..", "dist/index.html"));
} else {
  win.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}`);
}
```

3.electron 的最新版本中打包生成的文件名为 dist-electron,因此入口文件的路径要改

<!-- package.json -->

```js
"main": "dist-electron/index.js",
```

4.打包后生成的文件正常配置打开会出现 Can't find module ...(dist-electron/index.ts)的报错,需要改变打包时加入的文件

<!-- package.json -->

```js
   "files": [
      "dist",
      "dist-electron/index.js"
    ],
```

5.我第一次运行的时候出现了 electron 配置的环境错误相关的报错,注意 devDependencies(开发) 和 dependencies(项目运行) 两者环境的区别
=======
# electron-demo
electron demo
>>>>>>> 9f0a0729ba1c41159a43edf9811ac62697fb89c7
