<template>
  <div class="action-body">
    action-test
  </div>
</template>

<script>
export default {
  name: "action",
  data() {
    return {
      data: ''
    }
  },
  methods: {
    load() {
      console.log('action')
    }
  }
}
</script>

<style lang="scss" scoped>
.action-body {
  width: 100%;
  height: 100%;
}
</style>