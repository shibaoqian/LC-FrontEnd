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
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import {useStore} from "vuex";

  const appsBox = ref()
  const store = useStore()

  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)
  const dragStatus = computed(() => store.getters.dragStatus)

function dragenter(e) {
  store.commit('setDragStatus',true)
}

function dragover(e) {
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
  store.commit('setDragStatus',false)
  let data = e.dataTransfer.getData("text");
  console.log(data,'drop')
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