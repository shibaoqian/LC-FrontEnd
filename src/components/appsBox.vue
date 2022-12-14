<template>
  <div class="appsBox-body" ref="appsBox">
    <div class="lattice-layer">
      <div class="lattice-control" v-if="clientWidth">
        <div class="lattice-row" v-for="(row,indexW) in clientWidth" :key="indexW">
          <div class="lattice-col" :class="indexW === 0 ? 'col-left' : ''" v-for="(col,indexH) in clientHeight" :key="indexH">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";
  const appsBox = ref()
  const clientHeight = computed(() => parseInt((appsBox.value?.clientHeight / 45).toFixed(1)) - 1)
  const clientWidth = computed(() => parseInt((appsBox.value?.clientWidth / 45).toFixed(0)) - 1)

</script>

<style lang="scss" scoped>
.appsBox-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .lattice-layer{
    z-index: 0;
    position: absolute;
    .lattice-control{
      display: flex;
      .lattice-row{
        .lattice-col{
          height: 46.4px;
          width: 46.4px;
          position: relative;

          &:before{
            content: ' ';
            width: 2px;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: white;
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
}
</style>