<template>
  <div class="FEInput-body">
    FEInput-test
  </div>
</template>

<script>
export default {
  name: "FEInput",
  data() {
    return {
      data: ''
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