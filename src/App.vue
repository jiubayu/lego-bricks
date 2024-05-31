<template>
  <h1>慕课乐高标准模版</h1>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue';
export interface TestProps {
  name: string;
}
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      getCurrentInstance()?.appContext.config.globalProperties.$echo();
    })
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
