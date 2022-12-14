<template>
  <div class="appsBox-body" ref="appsBox" @dragenter="dragenter" @dragleave="dragleave" @dragover="dragover">
    <div class="lattice-layer">
      <div class="lattice-control" v-if="clientWidth">
        <div class="lattice-row" v-for="(row,indexW) in clientWidth" :key="indexW">
          <div class="lattice-col" :class="indexW === 0 ? 'col-left' : ''" v-for="(col,indexH) in clientHeight" :key="indexH">
          </div>
        </div>
      </div>
    </div>
    <div class="lattice-mask" :class="reactiveData.dragStatus ? 'mask-show' : 'mask-none'"></div>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import {useStore,mapGetters} from "vuex";

  const appsBox = ref()
  const store = useStore()
  let reactiveData = reactive({
    dragStatus: false
  })
  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)
  const stateMap = computed(() => {  return{ ...mapGetters(['dragX','dragY'])}})
function dragenter(e) {
  // console.log(e,'appsBox')
  reactiveData.dragStatus = true
}

function dragover(e) {
  // console.log(e,'dragover')
  let data = e.dataTransfer.getData("id");
  console.log(data)
  store.commit('setXYData',{X: e.layerX,Y: e.layerY,})
  // e.preventDefault();
  // reactiveData.dragStatus = true
}

function dragleave(e) {
  reactiveData.dragStatus = false
  // console.log(e,'appsBoxDragleave')
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