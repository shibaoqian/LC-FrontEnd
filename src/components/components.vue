<template>
  <div class="components-body">
    components-test
  </div>
</template>

<script>
export default {
  name: "components",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('components')
    }
  }
}
</script>

<style lang="scss" scoped>
.components-body {
  width: 100%;
  height: 100%;
}
</style>