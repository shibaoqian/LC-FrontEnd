<template>
  <div class="appsBox-body" ref="appsBox"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
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
  </div>
</template>

<script setup>
import {computed, ref, shallowRef} from "vue";
import {useStore} from "vuex";
import snowflake from 'snowflake-id'
import apps from "@/layout/components/apps.vue";
import {cloneDeep} from 'lodash'

  const appsBox = ref()
  const store = useStore()
  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)
  const dragStatus = computed(() => store.getters.dragStatus)
  const comRaw = computed(() => store.getters.comRaw)
  const appsData = computed(() => store.getters.appsData)
  const focusStatus = computed(() => store.getters.focusStatus)
  const focusAppData = computed(() => store.getters.focusAppData)
  const downX = computed(() => store.getters.downX)
  const downY = computed(() => store.getters.downY)
function dragenter(e) {
  store.commit('setDragStatus',true)
}

function dragover(e) {
  e.preventDefault();
  // console.log(e,'dragover')
  store.commit('setXYData',{X: e.layerX,Y: e.layerY,})
  // e.preventDefault();
  // reactiveData.dragStatus = true
}

function dragleave(e) {
  store.commit('setDragStatus',false)
  // console.log(e,'appsBoxDragleave')
}

function dragDrop(e) {
  e.preventDefault();
  const snowflakeId = new snowflake
  let data = e.dataTransfer.getData("text");
  store.commit('setDragStatus',false)
  let appData = {}
  // comRaw.value.forEach(res => {
  //
  //   if (res.key === data){
  //     res.key = `${res.key}-${snowflakeId.generate()}`
  //     res.position.X = store.getters.dragX
  //     res.position.Y = store.getters.dragY
  //
  //   }
  // })
  appData = cloneDeep(comRaw.value.find((res) => { return res.key === data }))

  appData.key = `${appData.key}-${snowflakeId.generate()}`
  appData.component = shallowRef(appData.component)
  appData.position.X = store.getters.dragX
  appData.position.Y = store.getters.dragY
  store.commit('setAppsData',appData)
  console.log(appsData.value,'appsData')
  console.log(comRaw.value,'comRaw')

  // console.log(data,'drop')
  // e.target.appendChild(document.getElementById(data));
}
function mouseDown(e) {
  store.commit('clearFocusAppData')
  console.log('downBox')
}
function mouseMove(e) {
  if (focusStatus.value){
    // store.commit('setXYData',{X: e.movementX,Y: e.movementY,})
    appsData.value.forEach(res => {
      if (res.key === focusAppData.value.key){
        res.position.X = e.clientX - 200 - downX.value
        res.position.Y = e.clientY - downY.value
        // console.log(X,Y)
        console.log(res.position.X,res.position.Y,'downData')
      }
    })
    console.log(e,'mouseMove')
  }
}
function mouseUp(item) {
  store.commit('setFocusStatus', false)
}
</script>

<style lang="scss" scoped>
.appsBox-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
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