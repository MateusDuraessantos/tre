<template>
  <header class="banner" id="inicio">
    <div class="block text-center">
      <el-carousel height="60vh">
        <el-carousel-item>
          <div class="container_descricao">
            <div class="descricao_banner">
              <h1>
                design é <br />
                <span>inteligência <br /> tornada visível</span>
              </h1>
            </div>
            <figure>
            <img class="img" src="../assets/banner/banner01.png" alt="Banner com folhas de bambu" />
          </figure>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="container_descricao">
            <div class="descricao_banner">
              <h1>
                design aguça sua percepção, <br> gera uma nova ação sobre as coisas
                <br />
                <span>e modifica a realidade</span>
              </h1>
            </div>
            <figure>
            <img class="img" src="../assets/banner/banner02.png" alt="Banner com circulos e folhas de palmeira" />
          </figure>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="container_descricao">
            <div class="descricao_banner">
              <h1>
                tudo está em constante evolução
                <br /><span>construir novas realidades</span> é tarefa do design
              </h1>
            </div>
            <figure>
            <img class="img" src="../assets/banner/banner03.png" alt="Banner com varias formas geográficas " />
          </figure>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="container_descricao">
            <div class="descricao_banner">
              <h1>
                a mais de 30 anos<br />
                <span>construíndo e auxiliando
                grandes marcas a se <br /> posicionar e encontrar <br> seu propósito</span>
              </h1>
            </div>
            <figure>
            <img class="img" src="../assets/banner/banner04.png" alt="Banner com icones de varios clientes" />
          </figure>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </header>
</template>
<script>
import Nav from './Nav.vue';
export default {
  components: { Nav },
  name: "Nav",
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

.container_descricao {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
}
.descricao_banner {
  position: absolute;
  display: flex;
  align-items: center;
  width: var(--body_content_width);
  height: 100%;
}

.descricao_banner p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 300;
  font-size: 1.5em;
  background: rgba(255, 255, 255, 0.7);
  padding: 0 20px;
  width: max-content;
  height: 100%;
}

span {
  font-size: 28px;
  display: block;
  font-weight: 600;
  color: #333;
}
</style>
