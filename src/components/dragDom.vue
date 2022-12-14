<template>
  <div draggable="true" class="com-box flex a-c pointer j-c" @drag="dragDom" @dragstart="dragStartDom" @dragend="dragEndDom">
    <img class="com-img" :src="props.icon" alt="">
    <span>{{props.name}}</span>
  </div>
</template>

<script setup>
  const props = defineProps(
      {
        icon: String,
        name: String
      }
  )
  function dragDom(e) {
    console.log(e)
  }
  function dragStartDom(e) {
    console.log(e)
  }
  function dragEndDom(e) {
    console.log(e)
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
  .com-img{
    width: 20px;
    height: 20px;
  }
}
</style>