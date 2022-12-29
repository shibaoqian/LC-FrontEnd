<script setup>
import {defineAsyncComponent} from "vue";
import Action from "@/layout/components/action.vue";
const componentsBox = defineAsyncComponent(() => import('@/layout/components/components.vue'))
const appsBox = defineAsyncComponent(() => import('@/layout/components/appsBox.vue'))
const action = defineAsyncComponent(() => import('@/layout/components/action.vue'))
</script>


<template>
  <div class="content-body">
    <div class="components-box">
      <componentsBox />
    </div>
    <div class="apps-box">
      <appsBox />
    </div>
    <action/>
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