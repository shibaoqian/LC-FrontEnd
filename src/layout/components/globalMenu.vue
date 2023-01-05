<template>
  <div class="globalMenu-body flex a-c j-c">
    <el-button
        type="primary"
        link
        @click="centerDialogVisible = true"
    >菜单</el-button>
    <el-dialog v-model="centerDialogVisible" title="菜单" width="30%" center>
      <el-form :model="form" label-width="120px">
        <el-form-item label="根布局模式">
          <el-select v-model="form.rootPosition" placeholder="选择生成文件类型">
            <el-option label="绝对布局" value="absolute" />
            <el-option label="相对布局" value="relative" />
          </el-select>
        </el-form-item>
        <el-form-item label="生成文件类型">
          <el-select v-model="form.fileType" placeholder="选择生成文件类型">
            <el-option label="vue" value="vue" />
            <el-option label="html" value="html" />
          </el-select>
          <el-button class="saveBtn" type="primary" @click="saveFile">生成</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const centerDialogVisible = ref(false)

const form = reactive({
  rootPosition: 'absolute',
  fileType: 'vue',
})

function saveFile() {

}
</script>

<style lang="scss" scoped>
.globalMenu-body {
  width: 100%;
  height: 50px;
  background: #213547;
  position: absolute;
  left: 0;
  bottom: 0;
  .saveBtn{
    margin-left: 20px;
  }
}
</style>
