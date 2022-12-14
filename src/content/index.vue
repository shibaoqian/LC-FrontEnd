<script setup>
import {defineAsyncComponent} from "vue";
const componentsBox = defineAsyncComponent(() => import('@/components/components.vue'))
const appsBox = defineAsyncComponent(() => import('@/components/appsBox.vue'))
</script>
<template>
  <div class="content-body">
    <div class="components-box">
      <componentsBox />
    </div>
    <div class="apps-box">
      <appsBox />
    </div>
  </div>
</template>



<style lang="scss" scoped>
.content-body {
  width: 100%;
  height: 100%;
  display: flex;
  .components-box{
    width: 200px;
  }
  .apps-box{
    width: calc(100% - 200px);
  }
}
</style>