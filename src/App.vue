<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const contentBox = defineAsyncComponent(() => import('./content/index.vue'))
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