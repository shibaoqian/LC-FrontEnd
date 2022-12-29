<template>
    <div class="app-box c-move"
         @mousedown.stop="(e) => mouseDown(item,e)"
         @mouseup.stop="mouseUp"
         :class="item.key === focusAppData.key ? 'selected' : ''"
         :style="boxStyle(item)"
         v-for="(item,index) in props.appsData"
         :key="index">
      <component :is="item.component"></component>
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
const store = useStore()
const props = defineProps({
  appsData: {
    type: Array,
    default: []
  }
})


function boxStyle(item) {
  return {
    top: item.position.Y+'px',
    left: item.position.X+'px'
  }
}
const focusAppData = computed( () => store.getters.focusAppData )
const menuShow = computed( () => store.getters.menuShow )

function mouseDown(item,e) {
  if (e.button === 0 ){
    if (!menuShow.value){
      store.commit('setFocusStatus', item)
    }
    store.commit('setMoveStatus', true)
    store.commit('setMenuShow', false)
  }else if (e.button === 2){
    store.commit('setMenuShow', true)
  }
  store.commit('setFocusAppData', item)
  store.commit('setDownData', {X: e.layerX,Y: e.layerY,})
  console.log(e.button)
}
function mouseUp() {
  // debugger
  //清空选择状态
  store.commit('setMoveStatus', false)
}
</script>

<style lang="scss" scoped>
.app-box{
  position: absolute;
  z-index: 3;
  user-select: none;
}
.selected{
  box-shadow: 0 0 12px rgba(255, 255, 255, .12);
}
</style>