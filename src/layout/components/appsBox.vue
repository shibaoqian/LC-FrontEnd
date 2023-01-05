<template>
  <div class="appsBox-body" ref="appsBox"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseLeave"
       @drop="dragDrop"
       @dragenter.prevent="dragenter"
       @dragleave.prevent="dragleave"
       @dragover.prevent="dragover">
    <div class="lattice-layer">
      <div class="lattice-control" v-if="clientWidth">
        <div class="lattice-row" v-for="(row,indexW) in clientWidth" :key="indexW">
          <div class="lattice-col" :class="indexW === 0 ? 'col-left' : ''" v-for="(col,indexH) in clientHeight" :key="indexH">
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
import {computed, ref, shallowRef, watch} from "vue";
import {useStore} from "vuex";
import snowflake from 'snowflake-id'
import {cloneDeep} from 'lodash'
import Apps from "@/layout/components/apps.vue";
import AppMenu from "@/layout/components/appMenu.vue";

  const appsBox = ref()
  const store = useStore()

  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)
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

function dragenter(e) {
  store.commit('setDragStatus',true)
}

function dragover(e) {
  e.preventDefault();
  // 拖拽结束前，保存结束前位置
  store.commit('setXYData',{X: e.layerX,Y: e.layerY,})
}

function dragleave(e) {
  //拖拽中离开apps区
  store.commit('setDragStatus',false)
}

function dragDrop(e) {
  e.preventDefault();
  //拖拽放置事件，赋值
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
  //清空选择组件数据
  store.commit('clearFocusAppData')
  store.commit('setMenuShow', false)
}
function mouseMove(e) {
  //拖动组件
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
  //清空选择状态
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