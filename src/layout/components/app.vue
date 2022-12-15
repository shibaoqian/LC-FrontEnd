<template>
  <div class="app-body">
    app-test
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('app')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-body {
  width: 100%;
  height: 100%;
}
</style>