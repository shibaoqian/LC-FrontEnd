<template>
    <div class="app-box c-move"
         @mousedown.stop="(e) => mouseDown(item,e)"
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

function mouseDown(item,e) {
  store.commit('setFocusAppData', item)
  store.commit('setFocusStatus', true)
  store.commit('setDownData', {X: e.layerX,Y: e.layerY,})
  console.log(e)
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