<template>
  <div class="appsBox-body" id="appsBox" ref="appsBox"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseLeave"
       @drop="dragDrop"
       @dragenter.prevent="dragenter"
       @dragleave.prevent="dragleave"
       @dragover.prevent="dragover">
    <div class="lattice-layer">
      <div class="lattice-control" v-if="client.width">
        <div class="lattice-row" v-for="(row,indexW) in client.width" :key="indexW">
          <div class="lattice-col" :class="indexW === 0 ? 'col-left' : ''" v-for="(col,indexH) in client.height" :key="indexH">
          </div>
        </div>
      </div>
    </div>
    <div class="lattice-mask"   :class="dragStatus ? 'mask-show' : 'mask-none'"></div>
    <apps :appsData="appsData"></apps>
    <appMenu v-show="menuShow" :style="menuStyle"></appMenu>
  </div>
</template>

<script setup>
import {computed, nextTick, reactive, ref, shallowRef} from "vue";
import {useStore} from "vuex";
import snowflake from 'snowflake-id'
import {cloneDeep} from 'lodash'
import Apps from "@/layout/components/apps.vue";
import AppMenu from "@/layout/components/appMenu.vue";

  const appsBox = ref()
  const store = useStore()
  let client = reactive({
    width: 0,
    height: 0
  })
  const dragStatus = computed(() => store.getters.dragStatus)
  const comRaw = computed(() => store.getters.comRaw)
  const appsData = computed(() => store.getters.appsData)
  const moveStatus = computed(() => store.getters.moveStatus)
  const focusAppData = computed(() => store.getters.focusAppData)
  const downX = computed(() => store.getters.downX)
  const downY = computed(() => store.getters.downY)
  const menuShow = computed(() => store.getters.menuShow)
  const menuStyle = computed(() => {
    let left = '0'
    let top = '0'
    appsData.value.forEach(res => {
      if (res.key === focusAppData.value.key){
        left = `${res.position.X + downX.value}` + 'px'
        top = `${res.position.Y + downY.value}` + 'px'
      }
    })
    return {
      left,
      top
    }
  })
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    client.height = parseInt((entry.target.clientHeight / 45).toFixed(1)) - 1
    client.width = parseInt((entry.target.clientWidth / 45).toFixed(0)) - 1
  }
});
nextTick(() => {
  const box = document.querySelector('#appsBox')
  if (box){
    resizeObserver.observe(box);
  }
})

function dragenter(e) {
  store.commit('setDragStatus',true)
}

function dragover(e) {
  e.preventDefault();
  // ???????????????????????????????????????
  store.commit('setXYData',{X: e.layerX,Y: e.layerY,})
}

function dragleave(e) {
  //???????????????apps???
  store.commit('setDragStatus',false)
}

function dragDrop(e) {
  e.preventDefault();
  //???????????????????????????
  const snowflakeId = new snowflake
  let data = e.dataTransfer.getData("text");
  store.commit('setDragStatus',false)
  let appData = {}
  appData = cloneDeep(comRaw.value.find((res) => { return res.key === data }))
  appData.key = `${appData.key}-${snowflakeId.generate()}`
  appData.component = shallowRef(appData.component)
  appData.position.X = store.getters.dragX
  appData.position.Y = store.getters.dragY
  store.commit('setAppsData',appData)
}
function mouseDown(e) {
  //????????????????????????
  store.commit('clearFocusAppData')
  store.commit('setMenuShow', false)
}
function mouseMove(e) {
  //????????????
  if (moveStatus.value){
    appsData.value.forEach(res => {
      if (res.key === focusAppData.value.key){
        res.position.X = e.clientX - 200 - downX.value
        res.position.Y = e.clientY - downY.value
      }
    })
  }
}

function mouseUp(item) {
  // debugger
  //??????????????????
  store.commit('setMoveStatus', false)
}

function mouseLeave() {
  store.commit('setMoveStatus', false)
}
</script>

<style lang="scss" scoped>
.appsBox-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 5;
  .lattice-layer{
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .lattice-control{
      display: flex;
      .lattice-row{
        .lattice-col{
          height: 46.4px;
          width: 46.4px;
          position: relative;

          &:before{
            content: ' ';
            width: 3px;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: white;
            border-radius: 50%;
          }
        }
        .col-left{

          &:before{
            display: none;
          }
        }
      }
    }
  }
  .lattice-mask{
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
    transition: all 0.2s ease-out;

  }

  .mask-none{
    opacity: 0;
  }
  .mask-show{
    opacity: 1;
  }

}
</style>
