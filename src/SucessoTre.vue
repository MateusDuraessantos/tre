<template>
  <div class="sucesso">
    <div class="c-sucesso">
      <div class="sucesso__menssagem">
        <p>
          <span>Recebemos o seu email</span>
          <br>
          em breve vamos retorna-lo, até mais!
        </p>
      </div>
      <a href="/" class="sucesso__voltar">Voltar</a>
      <img class="sucesso__background" src="banner02.png">
    </div>

  </div>
</template>

<script>
export default {
  name: 'SucessoTre'
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


.c-sucesso {
  display: flex;
  flex-direction: column;
  z-index: 1;
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
  border-bottom: 1px solid #28B2ED;
}

.sucesso__voltar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #28B2ED;
  color: white;
  font-size: 16px;
  width: 100%;
  height: 30px;
  border: none;
  z-index: 1;
  transition: .2s;
  margin-top: 16px;
}

.sucesso__voltar:hover{
  background: #1788c5;
  transition: .2s;
}

.sucesso__menssagem span {
  font-size: 26px;
}
</style>