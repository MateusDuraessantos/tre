<template>
  <div class="banner">
    <div class="block text-center">
      <el-carousel height="60vh">
        <el-carousel-item v-for="(item, index) in imagensBanner" :key="index">
          <img class="img" :src="item" alt="Banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      imagensBanner: [
        require("../assets/banner/banner01.png"),
        require("../assets/banner/banner02.png"),
        require("../assets/banner/banner03.png"),
        require("../assets/banner/banner04.png"),
        require("../assets/banner/banner05.png"),
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  width: calc(100vw - 17px);
  overflow: hidden;
  box-sizing: border-box;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
