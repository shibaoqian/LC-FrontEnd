<template>
  <div class="FERadio-body">
    <el-radio-group v-model="data" class="ml-4">
      <el-radio label="1" size="large">Option 1</el-radio>
      <el-radio label="2" size="large">Option 2</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup>
import {ref} from "vue";

const data = ref('1')
</script>

<style lang="scss" scoped>
.FERadio-body {
}
</style>