<template>
  <div class="components-body flex j-c-b">
    <dragDom  v-for="(item,index) in comData" :key="index" :icon="item.icon" :name="item.name" :component="item.component">
    </dragDom>
  </div>
</template>

<script setup>
import {defineAsyncComponent} from "vue";

const dragDom = defineAsyncComponent(() => import('@/layout/components/dragDom.vue'))
import { useStore } from 'vuex'
const store = useStore()
const comData = store.getters.comData
</script>

<style lang="scss" scoped>
.components-body {
  width: calc(100% - 20px);
  height: calc(100% - 40px);
  border-right: #ccc solid 1px;
  flex-flow: wrap;
  align-content: flex-start;
  padding: 20px 10px;
  gap: 10px;

}
</style>