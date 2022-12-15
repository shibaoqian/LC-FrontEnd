<template>
  <div class="appsBox-body" ref="appsBox" @drop="dragDrop"  @dragenter.prevent="dragenter" @dragleave.prevent="dragleave" @dragover.prevent="dragover">
    <div class="lattice-layer">
      <div class="lattice-control" v-if="clientWidth">
        <div class="lattice-row" v-for="(row,indexW) in clientWidth" :key="indexW">
          <div class="lattice-col" :class="indexW === 0 ? 'col-left' : ''" v-for="(col,indexH) in clientHeight" :key="indexH">
          </div>
        </div>
      </div>
    </div>
    <div class="lattice-mask"   :class="dragStatus ? 'mask-show' : 'mask-none'"></div>
    <div class="lattice-appsBox">
      <div class="app-box" :style="`top: ${item.position.Y}px;left: ${item.position.X}px`" v-for="(item,index) in appsData" :key="index">
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import FEBtn from "@/components/FEBtn.vue";
  const appsBox = ref()
  const store = useStore()
  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)
  const dragStatus = computed(() => store.getters.dragStatus)
  const comRaw = computed(() => store.getters.comRaw)
  const appsData = computed(() => store.getters.appsData)
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

  let data = e.dataTransfer.getData("text");
  store.commit('setDragStatus',false)
  let appData = {}
  comRaw.value.forEach(res => {
    if (res.key === data){
      res.position.X = store.getters.dragX
      res.position.Y = store.getters.dragY
      appData = res
    }
  })

  store.commit('setAppsData',appData)
  console.log(appsData.value)

  console.log(data,'drop')
  // e.target.appendChild(document.getElementById(data));
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
  .lattice-appsBox{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    .app-box{
      position: absolute;
    }
  }
}
</style>