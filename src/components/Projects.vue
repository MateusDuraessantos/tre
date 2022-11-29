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
        <button class="close" @click="pop()">
          <img src="../assets/icons/close.svg" alt="" />
        </button>
        <div class="grid_prof">
          <div>
            <div
              v-for="(brabos, index) in projetos[teste].textoMassa"
              :key="index"
            >
              <h3>{{ brabos.title }}</h3>
              <br />
              <div>{{ brabos.descricao }}</div>
            </div>
          </div>

          <el-carousel height="350px">
            <el-carousel-item
              v-for="(brabos, index) in projetos[teste].algo[vaiIr]"
              :key="index"
            >
              <img class="img_size" :src="brabos.fotos" :key="index" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="outros">
          <button class="changeNumber" @click="changeNumber(0)">Botão 0</button>
          <button class="changeNumber" @click="changeNumber(1)">Botão 1</button>
          <button class="changeNumber" @click="changeNumber(2)">Botão 2</button>
          <button class="changeNumber" @click="changeNumber(3)">Botão 3</button>
          <button class="changeNumber" @click="changeNumber(4)">Botão 4</button>
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
      vaiIr: 0,
      projetos: [
        {
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/logo/2.png"),
          algo: [
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/2.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/1.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/redesSociais/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/redesSociais/2.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/redesSociais/3.png"),
              },
            ],
          ],
        },
        {
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca, esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada.",
            },
          ],
          profs: require("../assets/portfolios/blackDog/2.png"),
          algo: [
            [
              { fotos: require("../assets/portfolios/blackDog/1.png") },
              { fotos: require("../assets/portfolios/blackDog/2.png") },
              { fotos: require("../assets/portfolios/blackDog/3.png") },
            ],
          ],
        },
      ],
    };
  },
  methods: {
    changeNumber(n) {
      this.vaiIr = n;
      console.log(this.vaiIr);
    },
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

h3 {
  font-size: 30px;
}
.content_projetos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: flex-start;
  align-content: flex-start;
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
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
  z-index: 20;
}

.pop_content {
  position: relative;
  background: white;
  width: 100vw;
  max-width: 900px;
  border-radius: 8px;
  padding: 40px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
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

  gap: 20px;
  grid-template-columns: 1fr 1.5fr;
}
.img_size {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.outros {
  display: flex;
  margin-top: 30px;
  gap: 20px;
}

.changeNumber {
  cursor: pointer;
  border-radius: 6px;
  height: 150px;
  width: 100%;
  border: 4px solid rgba(0, 0, 0, 0);
}

.changeNumber:hover {
  border: 4px solid #ffc800;
}
</style>
