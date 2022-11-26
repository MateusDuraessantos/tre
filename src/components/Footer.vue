<template>
  <footer>
    <section class="footer-container">
      <section>
        <div>
          Av. dos Carinás, 736 CEP 04089-011 São Paulo - SP
          <div>
            <img src="../assets/icons/local.png" />
            Localização no mapa
          </div>
        </div>
        <div>
          <div>
            <img src="../assets/icons/fone.png" />
            (11) 5054 2425
          </div>
          <div>
            <img src="../assets/icons/email.png" />
            contato@tre.art.br
          </div>
          <div>
            <img src="../assets/icons/insta.png" />
            @trecomunicacao
          </div>
        </div>
      </section>
      <div class="cont-contact">
        <div class="fale">
          <p>Fale conosco | Mackenzie Soluções</p>
          <div class="cont-input">
            <p>Nome:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>E-mail:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>Assunto:</p>
            <input type="text" />
          </div>
          <div class="cont-input">
            <p>Mensagem:</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
footer {
  position: relative;
  height: 500px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/banner/banner02.png");
}
.footer-container {
  width: var(--body_content_width);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-container section {
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
