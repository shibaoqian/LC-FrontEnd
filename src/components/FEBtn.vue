<template>
  <div class="button-body">
    <el-button>test</el-button>
  </div>
</template>

<script>
export default {
  name: "btn",
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

}
</style>