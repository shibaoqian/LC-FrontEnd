<template>
  <div class="components-body flex j-c-b">
    <dragDom  v-for="(item,index) in comData" :key="index" :icon="item.icon" :name="item.name" :keyName="item.key">
    </dragDom>
    <GlobalMenu></GlobalMenu>
  </div>
</template>

<script setup>
import {defineAsyncComponent} from "vue";
import { useStore } from 'vuex'
import GlobalMenu from "@/layout/components/globalMenu.vue";


const store = useStore()
const DragDom = defineAsyncComponent(() => import('@/layout/components/dragDom.vue'))

const comData = store.getters.comRaw
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
  position: relative;

}
</style>
