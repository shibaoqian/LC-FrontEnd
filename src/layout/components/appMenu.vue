<template>
  <div class="appMenu-body pointer" >
    <div v-for="(item,index) in menuData" :key="index" class="menu-box" @mousedown.stop="menuSelect(item.key)">
      {{item.label}}
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore()
const menuData = [
  {
    label: '删除',
    key: 'del'
  }
]
  function menuSelect(key) {
    switch (key) {
      case 'del':
        store.commit('delAppData')
        store.commit('setMenuShow', false)
        break;
    }
  }
</script>

<style lang="scss" scoped>
.appMenu-body {
  background: white;
  padding: 10px 10px;
  width: 70px;
  position: absolute;
  color: black;
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .5);
  user-select: none;
  text-align: center;
}
</style>