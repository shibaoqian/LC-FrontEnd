<template>
  <div class="content-body">
    <div class="components-box">

    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('index')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-body {
  width: 100%;
  height: 100%;
}
</style>