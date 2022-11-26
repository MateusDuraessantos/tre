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
              v-for="(brabos, index) in projetos[teste].img"
              :key="index"
            >
              <img class="img_size" :src="brabos.prof" />
            </el-carousel-item>
          </el-carousel>
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
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/3.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
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
          img: [
            { prof: require("../assets/portfolios/blackDog/1.png") },
            { prof: require("../assets/portfolios/blackDog/2.png") },
            { prof: require("../assets/portfolios/blackDog/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/2.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          profs: require("../assets/portfolios/canon/2.png"),
          img: [
            { prof: require("../assets/portfolios/canon/1.png") },
            { prof: require("../assets/portfolios/canon/2.png") },
            { prof: require("../assets/portfolios/canon/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Accesstage" },
            {
              descricao:
                "Empresa que em sua fundação foi subsidiária do grupo Mitsubishi e atua em Tecnologia voltada para o mercado financeiro. Fomos responsáveis em fazer a migração e o reposicionamento desta empresa para consolidar a marca para seu mercado, atualizar o lettering, símbolo e sua voz foram algumas das táticas da estratégia de identidade de marca. Também adentramos em atividades de comunicação para área comercial e o DH (desenvolvimento Humano) como o projeto OPEN e as campanhas de vendas, também atuamos no alinhamento (retrofit) dos ambientes da empresa em parceria com a área de arquitetura.",
            },
          ],
          profs: require("../assets/portfolios/accesstage/3.png"),
          img: [
            { prof: require("../assets/portfolios/accesstage/1.png") },
            { prof: require("../assets/portfolios/accesstage/2.png") },
            { prof: require("../assets/portfolios/accesstage/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/1.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
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
          profs: require("../assets/portfolios/blackDog/5.png"),
          img: [
            { prof: require("../assets/portfolios/blackDog/1.png") },
            { prof: require("../assets/portfolios/blackDog/2.png") },
            { prof: require("../assets/portfolios/blackDog/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          profs: require("../assets/portfolios/canon/1.png"),
          img: [
            { prof: require("../assets/portfolios/canon/1.png") },
            { prof: require("../assets/portfolios/canon/2.png") },
            { prof: require("../assets/portfolios/canon/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Accesstage" },
            {
              descricao:
                "Empresa que em sua fundação foi subsidiária do grupo Mitsubishi e atua em Tecnologia voltada para o mercado financeiro. Fomos responsáveis em fazer a migração e o reposicionamento desta empresa para consolidar a marca para seu mercado, atualizar o lettering, símbolo e sua voz foram algumas das táticas da estratégia de identidade de marca. Também adentramos em atividades de comunicação para área comercial e o DH (desenvolvimento Humano) como o projeto OPEN e as campanhas de vendas, também atuamos no alinhamento (retrofit) dos ambientes da empresa em parceria com a área de arquitetura.",
            },
          ],
          profs: require("../assets/portfolios/accesstage/1.png"),
          img: [
            { prof: require("../assets/portfolios/accesstage/1.png") },
            { prof: require("../assets/portfolios/accesstage/2.png") },
            { prof: require("../assets/portfolios/accesstage/3.png") },
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
          profs: require("../assets/portfolios/blackDog/1.png"),
          img: [
            { prof: require("../assets/portfolios/blackDog/1.png") },
            { prof: require("../assets/portfolios/blackDog/2.png") },
            { prof: require("../assets/portfolios/blackDog/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          profs: require("../assets/portfolios/canon/1.png"),
          img: [
            { prof: require("../assets/portfolios/canon/1.png") },
            { prof: require("../assets/portfolios/canon/2.png") },
            { prof: require("../assets/portfolios/canon/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Accesstage" },
            {
              descricao:
                "Empresa que em sua fundação foi subsidiária do grupo Mitsubishi e atua em Tecnologia voltada para o mercado financeiro. Fomos responsáveis em fazer a migração e o reposicionamento desta empresa para consolidar a marca para seu mercado, atualizar o lettering, símbolo e sua voz foram algumas das táticas da estratégia de identidade de marca. Também adentramos em atividades de comunicação para área comercial e o DH (desenvolvimento Humano) como o projeto OPEN e as campanhas de vendas, também atuamos no alinhamento (retrofit) dos ambientes da empresa em parceria com a área de arquitetura.",
            },
          ],
          profs: require("../assets/portfolios/accesstage/1.png"),
          img: [
            { prof: require("../assets/portfolios/accesstage/1.png") },
            { prof: require("../assets/portfolios/accesstage/2.png") },
            { prof: require("../assets/portfolios/accesstage/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/3.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
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
          img: [
            { prof: require("../assets/portfolios/blackDog/1.png") },
            { prof: require("../assets/portfolios/blackDog/2.png") },
            { prof: require("../assets/portfolios/blackDog/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],
          profs: require("../assets/portfolios/belezaDaVila/2.png"),
          img: [
            { prof: require("../assets/portfolios/belezaDaVila/1.png") },
            { prof: require("../assets/portfolios/belezaDaVila/2.png") },
            { prof: require("../assets/portfolios/belezaDaVila/3.png") },
          ],
        },
        {
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          profs: require("../assets/portfolios/canon/2.png"),
          img: [
            { prof: require("../assets/portfolios/canon/1.png") },
            { prof: require("../assets/portfolios/canon/2.png") },
            { prof: require("../assets/portfolios/canon/3.png") },
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
  /* height: 500px; */
  width: 100vw;
  max-width: 900px;
  border-radius: 8px;
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
  padding: 40px;
  gap: 20px;
  grid-template-columns: 1fr 1.5fr;
}
.img_size {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
