<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const contentBox = defineAsyncComponent(() => import('./content/index.vue'))
</script>

<template>
  <contentBox />
</template>

