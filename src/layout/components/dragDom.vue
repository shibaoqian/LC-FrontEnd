<template>
  <div draggable="true" class="com-box flex a-c j-c"  @drag="dragDom" @dragstart="dragStartDom" @dragend="dragEndDom">
    <img  draggable="false" class="com-img" :src="props.icon" alt="">
    <span>{{props.name}}</span>
  </div>
</template>

<script setup>
import {computed, defineAsyncComponent, ref} from "vue";
import {useStore} from "vuex";

  const store = useStore()
  const props = defineProps(
      {
        icon: String,
        name: String,
        component: String
      }
  )

  const dragStatus = computed(() => store.getters.dragStatus)
  const comData = document.getElementById('comData')

  function dragDom(e) {

    // Get the data, which is the id of the drop target

    // appendChild
    // e.target.appendChild(document.getElementById(data));
    // Clear the drag data cache (for all formats/types)
    // e.dataTransfer.clearData();

  }
  function dragStartDom(e) {
    e.currentTarget.style.border = "#01deff 1px dashed";
    // Set the drag's format and data. Use the event target's id for the data
    e.dataTransfer.setData("text/plain", e.target.id);
    // dt.setDragImage(comData, 0, 0);
    console.log(e,'dragStartDom')
  }
  function dragEndDom(e) {
    e.currentTarget.style.border = "#ccc solid 1px";
    console.log(e,'dragEndDom')
  }
</script>

<style lang="scss" scoped>
.com-box{
  width: 46%;
  border: #ccc solid 1px;
  border-radius: 5px;
  height: 40px;
  gap: 7px;
  user-select: none;
  z-index: 1;

  .com-img{
    width: 20px;
    height: 20px;
  }
}
.dragging {
  background: #747bff;
}
</style>