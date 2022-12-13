<template>
  <div class="components-body flex j-c-b">
    <div class="com-box flex a-c pointer j-c" v-for="(item,index) in comData" :key="index">
      <img class="com-img" :src="item.icon" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const comData = store.getters.comData
</script>

<style lang="scss" scoped>
.components-body {
  width: calc(100% - 20px);
  height: 100%;
  border-right: #ccc solid 1px;
  flex-flow: wrap;
  align-content: flex-start;
  padding: 20px 10px;
  gap: 10px;
  .com-box{
    width: 46%;
    border: #ccc solid 1px;
    border-radius: 5px;
    height: 40px;
    gap: 7px;
    .com-img{
      width: 20px;
      height: 20px;
    }
  }
}
</style>