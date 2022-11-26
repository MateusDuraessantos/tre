<template>
  <footer>
    <img class="imagem_background" src="../assets/banner/banner02.png" alt="" />

    <div class="footer_container">
      <section class="section">
        <div>
          <p>Av. dos Carinás, 736 CEP 04089-011 São Paulo - SP</p>
          <div class="contato">
            <img src="../assets/icons/local.svg" />
            <p>Localização no mapa</p>
          </div>
        </div>
        <div>
          <div class="contato">
            <img src="../assets/icons/fone.svg" />
            <p>(11) 5054 2425</p>
          </div>
          <div class="contato">
            <img src="../assets/icons/email.svg" />
            <p>contato@tre.art.br</p>
          </div>
          <div class="contato">
            <img src="../assets/icons/insta.svg" />
            <p>@trecomunicacao</p>
          </div>
        </div>
      </section>
      <form
        class="container_input"
        action="mailto:mateusduraessantos@gmail.com"
        method="POST"
        enctype="text/plain"
      >
        <img class="graf" src="../assets/grafismo.svg" alt="" required />
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="text" name="email" placeholder="E-mail" required />
        <textarea class="mensagem" name="message" placeholder="Mensagem"/>
        <input class="enviar" type="submit" value="enviar" />
      </form>
    </div>
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
  overflow: hidden;
}

.footer_container {
  width: var(--body_content_width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.section {
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contato {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
}

.contato img {
  width: 20px;
  height: 20px;
}
p {
  display: inline-block;
  margin: 0;
  color: #666666;
}
.imagem_background {
  position: absolute;
  opacity: 0.3;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}

.container_input {
  position: relative;
  display: flex;
  flex-direction: column;
}

.graf {
  position: absolute;
  top: 150px;
  left: -60px;
  width: 100px;
}

input,
.mensagem {
  border: none;
  border-bottom: 1px solid #666666;
  height: 36px;
  width: 320px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  padding: 12px;
  font-size: 16px;
}

.mensagem {
  height: 120px;
  width: 320px;
  word-wrap: break-word;
}

textarea {
  height: 120px !important;
  width: 320px !important;
  font-weight: 300;
}

input::placeholder {
  font-weight: 300;
}
textarea:focus,
input:focus {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  outline: 0;
  color: #28b2ed;
  transition: 0.2s;
  border-bottom: 1px solid #28b2ed;
}

.enviar {
  background: #28b2ed;
  padding: 0;
  border: none;
  height: 30px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
</style>
