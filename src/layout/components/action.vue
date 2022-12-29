<template>
  <div class="drawer" :class="{open: drawer}" >
    <h3>参数设置</h3>
  <div v-for="(item,index) in styleFormat" :key="index" class="action-row">
    <div class="row-label">
      {{item.style}}
    </div>
    <el-input></el-input>
  </div>
  </div>
</template>

<script setup>
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {styleFormat} from "@/utils/styleFormat.js";

const store = useStore()
const drawer = computed(() => store.getters.focusStatus)


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
    .row-label{
      width: 100px;
    }
  }
}
.open{
  box-shadow: 0 0 12px rgba(255, 255, 255, .5);
  transform: translateX(0) !important;
}
</style>