<template>
  <footer id="footer">
    <figure>
      <img class="imagem_background" src="imagens_site_tre_2023/banner/banner02.png" alt="fundo branco com folhas" />
    </figure>
    <section class="footer_container">
      <div class="section">
        <div>
          <div class="contato">
            <img src="imagens_site_tre_2023/assets/icons/email.svg" />
            <p>atendimento@tre.art.br</p>
          </div>
          <a href="https://www.instagram.com/trecomunicacao/" target="blank_" class="contato">
            <img src="imagens_site_tre_2023/assets/icons/insta.svg" />
            <p>@trecomunicacao</p>
          </a>
        </div>
      </div>

      <span>
        <form id="myForm" class="container_input" action="https://formsubmit.co/atendimento@tre.art.br" method="POST">

          <!-- Faz o navegar voltar para a tela principal após envio do formulário -->
          <input type="hidden" name="_next" value="https://tre.art.br/">

          <input type="hidden" name="_captcha" value="false">
          <!-- NAME -->
          <input type="text" id="nome" name="nome" placeholder="Nome" required>
          <!-- EMAIL -->
          <input type="email" id="email" name="email" placeholder="Email" required>
          <!-- MENSSAGEM -->
          <textarea name="menssagem" id="menssagem" placeholder="Menssagem" required></textarea>
        </form>

        <div class="container-reCaptcha">
          <div class="g-recaptcha" data-sitekey="6LeERKwUAAAAANv2Yaeh-2pWoAjC2hNRM9B-orki" data-size="normal"></div>
        </div>

        <!-- DIV button PARA ATIVAR O SUBMIT -->
        <div class="enviar" @click="testar" type="submit" name="enviar">enviar</div>
      </span>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    //ADICIONA NA TAG <head></head> O LINK PARA FUNCIONALIDADE DO reCAPTCHA
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?hl=pt-BR';
    document.head.appendChild(script);
  

    //ADICIONA NA TAG <head></head> O LINK PARA FUNCIONALIDADE DO reCAPTCHA
    const scriptApi = document.createElement('script');
    scriptApi.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit')
    scriptApi.setAttribute('async', '')
    scriptApi.setAttribute('defer', '')
    document.head.appendChild(scriptApi);
  },
  methods: {
    testar() {
      //PEGA OS CAMPOS PARA EVERIFICAR SE ESTÃO PREENCHIDOS
      const email = document.getElementById('email')
      const nome = document.getElementById('nome')
      const menssagem = document.getElementById('menssagem')

      //VALIDA SE TODOS OS CAMPOS FORAM PREENCHIDOS
      if (grecaptcha.getResponse() === "" || email.value === '' || nome.value === '' || menssagem.value === '') {
        alert('Preencha os campos para prosseguir')
        
      //SE ESTIVEREM PREENCHIODS, PERMITE O ENVIO
      } else {
        console.log('campos preenchidos')
        document.getElementById('myForm').submit()
      }
    },
  }
};
</script>

<style scoped>
.container-reCaptcha {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: 9px;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
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

@media only screen and (max-width: 450px) {}
</style>
