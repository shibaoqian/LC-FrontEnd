<script lang="ts" setup>
document.oncontextmenu = () => {
  return false
}
import { defineAsyncComponent } from 'vue'

const ContentBox = defineAsyncComponent(() => import('./layout/index.vue'))
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