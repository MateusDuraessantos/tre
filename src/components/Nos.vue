<template>
  <div id="nos">
    <el-tabs
      v-model="first"
      class="demo-tabs tabs_nos"
      @tab-click="handleClick"
    >
      <h2>nós</h2>
      <el-tab-pane label="histórico" name="first">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="valores" name="second">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="design" name="third">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="trepulantes" name="fourth">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
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

<style>
.tabs_nos .el-tabs__item.is-active {
  color: #ffc800;
}
.tabs_nos .el-tabs__active-bar {
  background: #ffc800;
}
</style>
