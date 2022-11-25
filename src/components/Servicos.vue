<template>
  <div id="servicos">
    <el-tabs v-model="primeiro" class="demo-tabs" @tab-click="handleClick">
      <h2>serviços</h2>
      <el-tab-pane label="naming" name="primeiro"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam
        aspernatur.</el-tab-pane
      >
      <el-tab-pane label="identidade da marca" name="segundo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="card design" name="tercerio">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="comunicação da marca" name="quarto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
      <el-tab-pane label="eventos" name="quinto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et quis
        iure ad magnam nulla porro aperiam consequatur modi. Voluptas quos
        cupiditate dicta itaque cumque sequi ab repellat veniam aspernatur.
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      primeiro: "primeiro",
    };
  },
};
</script>

<style scoped>
#servicos h2 {
  color: #e87aa7;
}
</style>
