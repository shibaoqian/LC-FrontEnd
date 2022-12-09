<script lang="ts" setup>

import { defineAsyncComponent } from 'vue'

const content = defineAsyncComponent(() => import('./content/index.vue'))
</script>

<template>
  <content />
</template>

<style scoped>
</style>
