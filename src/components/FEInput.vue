<template>
  <div class="FEInput-body">
    FEInput-test{{data}}
    <button @click="data++">点击</button>
  </div>
</template>

<script>
export default {
  name: "FEInput",
  data() {
    return {
      data:0
    }
  },
  methods: {
    load() {
      console.log('FEInput')
    }
  }
}
</script>

<style lang="scss" scoped>
.FEInput-body {
  width: 100%;
  height: 100%;
  background: darkblue;
}
</style>