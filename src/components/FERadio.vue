<template>
  <div class="FERadio-body">
    FERadio-test
  </div>
</template>

<script>
export default {
  name: "FERadio",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('FERadio')
    }
  }
}
</script>

<style lang="scss" scoped>
.FERadio-body {
  width: 100%;
  height: 100%;
  background: darkorange;
}
</style>