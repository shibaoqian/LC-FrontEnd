<template>
  <div class="drawer" :class="{open: drawer}" >
    <h3>参数设置</h3>
    <div v-for="(item,index) in focusAppData.style" :key="index" class="action-row">
      <div class="row-label flex a-c">
        {{item.name}}：
      </div>
      <el-color-picker v-if="item.style === 'background-color'" v-model="item.value" show-alpha />
      <el-input v-else v-model="item.value"></el-input>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";


const store = useStore()
const drawer = computed(() => store.getters.focusStatus)
const focusAppData = computed(() => store.getters.focusAppData)


</script>

<style lang="scss" scoped>
.drawer{
  width: 300px;
  height: 100vh;
  background: rgba(255,255,255,1);
  position: absolute;
  right: 0;
  transform: translateX(300px);
  transition: all 0.3s ease-out;
  z-index: 10;
  color: #1a1a1a;
  text-align: center;

  .action-row{
    display: flex;
    padding: 10px 10px;

    .row-label{
      width: 100px;
      text-align: right;
      padding-right: 10px;
    }
  }
}
.open{
  box-shadow: 0 0 12px rgba(255, 255, 255, .5);
  transform: translateX(0) !important;
}
</style>