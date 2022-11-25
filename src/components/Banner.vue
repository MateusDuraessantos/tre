<template>
  <div class="banner">
    <img src="../assets/banner/banner02.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.banner {
  background: pink;
  width: calc(100vw - 17px);
  height: 500px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
