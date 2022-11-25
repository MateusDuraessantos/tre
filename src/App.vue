<template>
  <nav>
    <figure>
      <img src="src/logoComNome.svg" alt="" />
    </figure>
    <ul>
      <li><a href="#inicio">inicio</a></li>
      <li><a href="#nos">nós</a></li>
      <li><a href="#servicos">serviços</a></li>
      <li><a href="#projetos">projetos</a></li>
      <li><a href="footer">contatos</a></li>
    </ul>
  </nav>

  <header id="inicio">
    <h1>Tre</h1>
  </header>
  <!-- <div class="banner">banner</div> -->
  <main>
    <!-- Nos -->
    <div id="nos">
      <h2>nós</h2>
      <el-tabs v-model="nos" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="histórico" name="first">histórico</el-tab-pane>
        <el-tab-pane label="valores" name="second">valores</el-tab-pane>
        <el-tab-pane label="design" name="third">design</el-tab-pane>
        <el-tab-pane label="trepulantes" name="fourth">trepulantes</el-tab-pane>
      </el-tabs>
    </div>

    <!-- Serviços -->
    <div id="servicos">
      <h2>serviços</h2>
      <el-tabs v-model="servicos" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="naming" name="primeiro">naming</el-tab-pane>
        <el-tab-pane label="identidade da marca" name="segundo"
          >identidade da marca</el-tab-pane
        >
        <el-tab-pane label="card design" name="tercerio"
          >card design</el-tab-pane
        >
        <el-tab-pane label="comunicação da marca" name="quarto"
          >comunicação da marca</el-tab-pane
        >
        <el-tab-pane label="eventos" name="quinto">eventos</el-tab-pane>
      </el-tabs>
    </div>

    <!-- Projetos -->
  </main>

  <footer>
    <section class="footer-container">
      <section>
        <div>
          Av. dos Carinás, 736 CEP 04089-011 São Paulo - SP
          <div>
            <img src="src/icons/local.png" />
            Localização no mapa
          </div>
        </div>
        <div>
          <div>
            <img src="src/icons/fone.png" />
            (11) 5054 2425
          </div>
          <div>
            <img src="src/icons/email.png" />
            contato@tre.art.br
          </div>
          <div>
            <img src="src/icons/insta.png" />
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
  name: "App",

  data() {
    return {};
  },
  methods: {
    mateus() {
      this.popup = !this.popup;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* font-family: 'Roboto', sans-serif; */

* {
  box-sizing: border-box !important;
  color: #2c2c2c;
}

:root {
  --body_content_width: 1100px;
}
a {
  text-decoration: none;
  color: #2c2c2c;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

nav {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
nav figure {
  margin: 0;
}
nav ul {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
nav ul li {
  list-style-type: none;
  cursor: pointer;
}
nav ul li a:hover {
  color: gray;
}

header {
  position: relative;
  top: 0;
  left: 0;
  height: 500px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.header_banner {
  position: relative;
  margin: 0;
  top: 0;
  left: 0;
  width: 3000px;
}

/* Content */
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* Banner */
.banner {
  background: pink;
  width: calc(100vw - 17px);
  height: 80vh;
  box-sizing: border-box;
}
/* container dos conteúdos */
#nos,
#projetos,
#servicos {
  width: 100%;
  max-width: var(--body_content_width);
}
h1 {
  font-size: 8rem;
  width: 100%;
  max-width: var(--body_content_width);
}
h2 {
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 0;
}
/* nós */
#nos h2 {
  margin-top: 50px;
  color: #ffc800;
}
/* servicos */
#servicos h2 {
  color: #e87aa7;
}
/* projetos */
#projetos h2 {
  color: #28b2ed;
}

.content_projetos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  height: 493px;
  margin-top: 20px;
  width: 100%;
  background: cyan;
  overflow-y: auto;
}

.thumb {
  cursor: pointer;
  width: 100%;
  height: 200px;
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

.popup_content {
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

.grid_images {
  width: 300px;
}

/* footer */
footer {
  position: relative;
  height: 500px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
