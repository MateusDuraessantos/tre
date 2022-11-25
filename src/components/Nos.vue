<template>
  <div id="nos">
    <el-tabs v-model="first" class="demo-tabs" @tab-click="handleClick">
      <h2>nós</h2>
      <el-tab-pane label="histórico" name="first">
        <div class="content_tabs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
          iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
          cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
        </div>
      </el-tab-pane>
      <el-tab-pane label="valores" name="second">
        <div class="content_tabs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
          iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
          cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
        </div>
      </el-tab-pane>
      <el-tab-pane label="design" name="third">
        <div class="content_tabs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
          iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
          cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
        </div>
      </el-tab-pane>
      <el-tab-pane label="trepulantes" name="fourth">
        <div class="content_tabs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
          iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
          cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "Nos",
  data() {
    return {
      first: "first",
    };
  },
};
</script>

<style scoped>
#nos h2 {
  color: #ffc800;
}
</style>
