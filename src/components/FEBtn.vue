<template>
  <div class="button-body">
    button-test
  </div>
</template>

<script>
export default {
  name: "button",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('button')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-body {
  width: 200px;
  height: 100px;
  background: #747bff;
  z-index: -999;
}
</style>