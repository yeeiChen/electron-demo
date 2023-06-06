<!--
 * @Description: 
 * @Author: yeeChen
 * @Date: 2023-06-05 16:55:10
 * @LastEditTime: 2023-06-06 18:25:50
 * @LastEditors: yeeChen
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ipcRenderer } from 'electron'

// 渲染进程接受主进程
ipcRenderer.on('load', (_, message) => {
  console.log(message)
})

// 发布订阅者模式,通过ipcRenderer函数，使渲染进程渲染主进程
const send = () => {
  ipcRenderer.send('message', 123)
}
</script>



<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button @click="send">发送信息</button>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
