<template>
  <footer id="footer">
    <figure>
      <img
        class="imagem_background"
        src="../assets/banner/banner02.png"
        alt="fundo branco com folhas"
      />
    </figure>
    <section class="footer_container">
      <div class="section">
        <div>
          <div class="contato">
            <img src="../assets/icons/email.svg" />
            <p>contato@tre.art.br</p>
          </div>
          <a
            href="https://www.instagram.com/trecomunicacao/"
            target="blank_"
            class="contato"
          >
            <img src="../assets/icons/insta.svg" />
            <p>@trecomunicacao</p>
          </a>
        </div>
      </div>
      <form
        class="container_input"
        action="mailto:teclakeystudio@gmail.com"
        method="POST"
        enctype="text/plain"
      >
        <img class="graf" src="../assets/grafismo.svg" alt="" required />
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <textarea name="message" placeholder="Mensagem" />
        <input class="enviar" type="submit" value="enviar" />
      </form>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",

};
</script>

<style scoped>
footer {
  position: relative;
  margin-top: 80px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  height: 100%;
  object-fit: cover;
  z-index: 1;
  top: 0;
  left: 0;
}
figure {
  margin: 0;
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
textarea {
  border: none;
  border-bottom: 1px solid #666666;
  height: 36px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  padding: 12px;
  font-size: 16px;
  font-weight: 300;
}

textarea {
  height: 120px;
  word-wrap: break-word;
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

@media only screen and (max-width: 900px) {
  .footer_container {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 450px) {
}
</style>
