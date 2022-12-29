<script lang="ts" setup>
function stop(){

  return false;

}

document.oncontextmenu=stop;
import { defineAsyncComponent } from 'vue'

const contentBox = defineAsyncComponent(() => import('./layout/index.vue'))
</script>

<template>
  <contentBox class="content-box" />
</template>

<style scoped>
.content-box{
  width: 100%;
  height: 100%;
}
</style>