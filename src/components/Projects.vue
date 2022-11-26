<template>
  <div id="projetos">
    <h2>projetos</h2>

    <div class="content_projetos">
      <div v-for="(projetosAll, index) in projetos" :key="index">
        <img class="thumb" :src="projetosAll.profs" @click="pop(index)" />
      </div>
    </div>

    <div class="overlay" v-if="up">
      <div class="pop_content">
        <button class="close" @click="pop()">X</button>
        <div class="grid_prof">
          <img
            v-for="(brabos, index) in projetos[teste].img"
            :key="index"
            class="img_size"
            :src="brabos.prof"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      up: false,
      teste: "",
      projetos: [
        {
          profs: require("../assets/portfolios/belezaDaVila/1.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
          ],
        },
        {
          profs: require("../assets/portfolios/blackDog/1.png"),
          img: [
            { prof: require("../assets/portfolios/blackDog/1.png") },
            { prof: require("../assets/portfolios/blackDog/2.png") },
            { prof: require("../assets/portfolios/blackDog/3.png") },
          ],
        },
        {
          profs: require("../assets/portfolios/canon/1.png"),
          img: [
            { prof: require("../assets/portfolios/canon/1.png") },
            { prof: require("../assets/portfolios/canon/2.png") },
            { prof: require("../assets/portfolios/canon/3.png") },
          ],
        },
        {
          profs: require("../assets/portfolios/accesstage/1.png"),
          img: [
            { prof: require("../assets/portfolios/accesstage/1.png") },
            { prof: require("../assets/portfolios/accesstage/2.png") },
            { prof: require("../assets/portfolios/accesstage/3.png") },
          ],
        },
      ],
    };
  },
  methods: {
    pop(n) {
      this.up = !this.up;
      this.teste = n;
      console.log(this.teste);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #28b2ed;
}
.content_projetos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: flex-start;
  align-content: flex-start;
  margin-top: 20px;
  width: 100%;
  background: rgb(99, 99, 99);
  overflow-y: auto;
}

.thumb {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  z-index: 2;
  left: 0;
  width: calc(100vw - 17px);
  height: 100vh;
}

.pop_content {
  position: relative;
  background: white;
  height: 500px;
  width: 700px;
  border-radius: 8px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
}

.close:hover {
  opacity: 0.7;
  transition: 0.2s;
}

.grid_prof {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.img_size {
  width: 100%;
  height: 100%;
}
</style>
