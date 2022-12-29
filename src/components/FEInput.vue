<template>
  <div class="FEInput-body">
    <el-input v-model="data"></el-input>
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
}
</style>