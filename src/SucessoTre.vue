<template>
  <div class="sucesso">
    <div class="c-grafismos">
      <img class="c-grafismo__1" src="grafismoSucesso_1.svg">
      <img class="c-grafismo__2" src="grafismoSucesso.svg">
    </div>
    <div class="c-sucesso">
      <div class="sucesso__menssagem">
        <p>
          <span>Recebemos o seu email!</span>
          <br>
          em breve entraremos em contato
        </p>
      </div>

      <a href="/" @click="showSucesso" class="sucesso__voltar">Voltar</a>
      <img class="sucesso__background" src="banner02.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SucessoTre',
  methods: {
    showSucesso() {
      this.$emit('showSucesso')
    }
  },
  mounted() {
    this.showSucesso()
  }
}
</script>

<style scoped>
.sucesso {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
}

.c-grafismos {
  position: absolute;
  width: 410px;
  height: 294px;
}

.c-grafismo__1 {
  position: absolute;
  width: 140px;
  top: -60px;
  right: -50px;
  z-index: 1;
}

.c-grafismo__2 {
  position: absolute;
  transform: translatex(-50px);
  width: 110px;
  z-index: 1;
  bottom: 0;
}

.c-sucesso {
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: max-content;
}

.sucesso__background {
  width: 100%;
  height: 100%;
  opacity: .5;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

}

.sucesso__menssagem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
  font-weight: 300;
  width: 410px;
  height: 248px;
  color: #4D4D4D;
  border-bottom: 1px solid #7AC943;
  z-index: 3;
}

.sucesso__menssagem span {
  font-size: 25px;
}

.sucesso__voltar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7AC943;
  color: white;
  font-size: 16px;
  width: 100%;
  height: 30px;
  border: none;
  z-index: 1;
  transition: .2s;
  margin-top: 16px;
}

.sucesso__voltar:hover {
  background: #58b119;
  transition: .2s;
}
</style>