<template>
  <div class="appsBox-body">
    appsBox-test
  </div>
</template>

<script>
export default {
  name: "appsBox",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('appsBox')
    }
  }
}
</script>

<style lang="scss" scoped>
.appsBox-body {
  width: 100%;
  height: 100%;
}
</style>