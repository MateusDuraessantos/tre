<template>
  <section id="projetos">
    <h2>projetos</h2>

    <div class="content_projetos">
      <div v-for="(projetosAll, index) in projetos" :key="index">
        <img class="thumb" :src="projetosAll.thumb" @click="pop(index)" />
      </div>
    </div>
    <span @brabis-silizimos="borabill"></span>
    <!-- <div class="overlay" v-if="up"> -->
    <div class="overlay" v-if="true">
      <div class="pop_content">
        <button class="close" @click="pop()">
          <img src="../assets/icons/close.svg" alt="" />
        </button>
        <div class="grid_prof">
          <!-- 1° -->
          <div class="grid_prof--first">
            <div
              v-for="(brabos, index) in projetos[teste].textoMassa"
              :key="index"
            >
              <h3>{{ brabos.title }}</h3>
              <div class="description--popup">{{ brabos.descricao }}</div>
            </div>
          </div>
          <!-- 2° -->
          <div class="grid_prof--second">
            <h4
              v-for="(brabos, index) in projetos[teste].titulosCarrossel[vaiIr]"
              :key="index"
            >
              {{ brabos }}
            </h4>

            <el-carousel arrow="always">
              <el-carousel-item
                v-for="(brabos, index) in projetos[teste].algo[vaiIr]"
                :key="index"
              >
                <div class="img_container">
                  <img class="c" :src="brabos.fotos" :key="index" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <h4>Outros projetos</h4>
        <div class="outros">
          <div
            @click="changeNumber(index), borda()"
            v-for="(brabos, index) in projetos[teste].algo"
            :key="index"
          >
            <img
              class="trocarProjeto"
              :src="braboss"
              v-for="(braboss, index) in brabos[0]"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      up: false,
      teste: 0,
      vaiIr: 0,
      brabissilizimos: "",
      projetos: /* BELEZA DA VILA */ [
        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de "algo".
            { titlex: "Marca Beleza da Vila" },
            { titlex: "Site e redes sociais" },
            { titlex: "Aplicações" },
          ],
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],

          thumb: require("../assets/portfolios/belezaDaVila/logo/1.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/2.png"),
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
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/4.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/5.png"),
              },
            ],
          ],
        },

        {
          titulosCarrossel: /* BLACKDOG */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Marca" },
            { titlex: "Cardápios" },
            { titlex: "Cartazes e cupons" },
            { titlex: "Embalagens para lanches" },
            { titlex: "Mesa e display" },
            { titlex: "Site" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca, esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada.",
            },
          ],
          thumb: require("../assets/portfolios/blackDog/marca/1.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/blackDog/marca/1.png"),
              },
              { fotos: require("../assets/portfolios/blackDog/marca/2.png") },
              { fotos: require("../assets/portfolios/blackDog/marca/3.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cardapios/1.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/4.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/4.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/5.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/6.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/7.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/2.png"),
              },
            ],
            [
              { fotos: require("../assets/portfolios/blackDog/site/1.png") },
              { fotos: require("../assets/portfolios/blackDog/site/2.png") },
              { fotos: require("../assets/portfolios/blackDog/site/3.png") },
              { fotos: require("../assets/portfolios/blackDog/site/4.png") },
            ],
          ],
        },
        // Projeto CANON
        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Canon anúncios" },
            { titlex: "Canon boletins" },
          ],
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          thumb: require("../assets/portfolios/canon/boletins/1.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              { fotos: require("../assets/portfolios/canon/anuncios/1.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/2.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/3.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/4.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/5.png") },
            ],
            [
              { fotos: require("../assets/portfolios/canon/boletins/1.png") },
              { fotos: require("../assets/portfolios/canon/boletins/2.png") },
            ],
          ],
        },

        {
          titulosCarrossel: /* ABRINQ */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Abrinq" },
            { titlex: "MAIOR idade penal" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "Abrinq é uma instituição que tem como missão incentivar e fazer cumprir as leis relacionadas ao estatuto da criança e do adolescente, somos empresa amiga da criança desde 2005 e desta forma trabalhar com a Abrinq foi muito natural, sempre desenvolvendo estratégias de comunicação e design para dar suporte às suas atividades e ações sociais.",
            },
          ],
          thumb: require("../assets/portfolios/abrinq/abrinq/1.png"),
          algo: [
            [
              { fotos: require("../assets/portfolios/abrinq/abrinq/1.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/2.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/3.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/4.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/1.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/2.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/3.png"),
              },
            ],
          ],
        },
        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de "algo".
            { titlex: "Marca Beleza da Vila" },
            { titlex: "Site e redes sociais" },
            { titlex: "Aplicações" },
          ],
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],

          thumb: require("../assets/portfolios/belezaDaVila/aplicacoes/2.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/2.png"),
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
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/4.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/5.png"),
              },
            ],
          ],
        },

        {
          thumb: require("../assets/portfolios/blackDog/embalagens/1.png"), // Thumbnail do projeto
          titulosCarrossel: /* BLACKDOG */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Marca" },
            { titlex: "Cardápios" },
            { titlex: "Cartazes e cupons" },
            { titlex: "Embalagens para lanches" },
            { titlex: "Mesa e display" },
            { titlex: "Site" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca, esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada.",
            },
          ],
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/blackDog/marca/1.png"),
              },
              { fotos: require("../assets/portfolios/blackDog/marca/2.png") },
              { fotos: require("../assets/portfolios/blackDog/marca/3.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cardapios/1.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/4.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/4.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/5.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/6.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/7.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/2.png"),
              },
            ],
            [
              { fotos: require("../assets/portfolios/blackDog/site/1.png") },
              { fotos: require("../assets/portfolios/blackDog/site/2.png") },
              { fotos: require("../assets/portfolios/blackDog/site/3.png") },
              { fotos: require("../assets/portfolios/blackDog/site/4.png") },
            ],
          ],
        },
        // Projeto CANON
        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Canon anúncios" },
            { titlex: "Canon boletins" },
          ],
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          thumb: require("../assets/portfolios/canon/boletins/2.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              { fotos: require("../assets/portfolios/canon/anuncios/1.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/2.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/3.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/4.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/5.png") },
            ],
            [
              { fotos: require("../assets/portfolios/canon/boletins/1.png") },
              { fotos: require("../assets/portfolios/canon/boletins/2.png") },
            ],
          ],
        },

        {
          titulosCarrossel: /* ABRINQ */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Abrinq" },
            { titlex: "MAIOR idade penal" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "Abrinq é uma instituição que tem como missão incentivar e fazer cumprir as leis relacionadas ao estatuto da criança e do adolescente, somos empresa amiga da criança desde 2005 e desta forma trabalhar com a Abrinq foi muito natural, sempre desenvolvendo estratégias de comunicação e design para dar suporte às suas atividades e ações sociais.",
            },
          ],
          thumb: require("../assets/portfolios/abrinq/maioridadepenal/2.png"),
          algo: [
            [
              { fotos: require("../assets/portfolios/abrinq/abrinq/1.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/2.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/3.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/4.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/1.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/2.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/3.png"),
              },
            ],
          ],
        },
        {
          titulosCarrossel: /* ABRINQ */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Abrinq" },
            { titlex: "MAIOR idade penal" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "Abrinq é uma instituição que tem como missão incentivar e fazer cumprir as leis relacionadas ao estatuto da criança e do adolescente, somos empresa amiga da criança desde 2005 e desta forma trabalhar com a Abrinq foi muito natural, sempre desenvolvendo estratégias de comunicação e design para dar suporte às suas atividades e ações sociais.",
            },
          ],
          thumb: require("../assets/portfolios/abrinq/maioridadepenal/3.png"),
          algo: [
            [
              { fotos: require("../assets/portfolios/abrinq/abrinq/1.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/2.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/3.png") },
              { fotos: require("../assets/portfolios/abrinq/abrinq/4.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/1.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/2.png"),
              },
              {
                fotos: require("../assets/portfolios/abrinq/maioridadepenal/3.png"),
              },
            ],
          ],
        },
        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de "algo".
            { titlex: "Marca Beleza da Vila" },
            { titlex: "Site e redes sociais" },
            { titlex: "Aplicações" },
          ],
          textoMassa: [
            { title: "Beleza da Vila" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],

          thumb: require("../assets/portfolios/belezaDaVila/redesSociais/3.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/logo/2.png"),
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
            [
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/4.png"),
              },
              {
                fotos: require("../assets/portfolios/belezaDaVila/aplicacoes/5.png"),
              },
            ],
          ],
        },

        {
          titulosCarrossel: [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Canon anúncios" },
            { titlex: "Canon boletins" },
          ],
          textoMassa: [
            { title: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],
          thumb: require("../assets/portfolios/canon/anuncios/1.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              { fotos: require("../assets/portfolios/canon/anuncios/1.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/2.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/3.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/4.png") },
              { fotos: require("../assets/portfolios/canon/anuncios/5.png") },
            ],
            [
              { fotos: require("../assets/portfolios/canon/boletins/1.png") },
              { fotos: require("../assets/portfolios/canon/boletins/2.png") },
            ],
          ],
        },
        {
          titulosCarrossel: /* BLACKDOG */ [
            // 1° - [titlex]: Titulo que vai em cima do carrosseis.
            // 2° - O número de objetos "titlex" deve corresponder a ordem e a quantidade de arrays dentro de [algo].
            { titlex: "Marca" },
            { titlex: "Cardápios" },
            { titlex: "Cartazes e cupons" },
            { titlex: "Embalagens para lanches" },
            { titlex: "Mesa e display" },
            { titlex: "Site" },
          ],
          textoMassa: [
            { title: "Blackdog" },
            {
              descricao:
                "A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca, esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada.",
            },
          ],
          thumb: require("../assets/portfolios/blackDog/marca/2.png"), // Thumbnail do projeto
          algo: [
            // [algo]: Todas as imagens relacionadas ao projeto
            // Cada array contem imagens relacionadas a o projeto principal do popup
            [
              {
                fotos: require("../assets/portfolios/blackDog/marca/1.png"),
              },
              { fotos: require("../assets/portfolios/blackDog/marca/2.png") },
              { fotos: require("../assets/portfolios/blackDog/marca/3.png") },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cardapios/1.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/cartazes/4.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/2.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/3.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/4.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/5.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/6.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/embalagens/7.png"),
              },
            ],
            [
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/1.png"),
              },
              {
                fotos: require("../assets/portfolios/blackDog/mesaedisplay/2.png"),
              },
            ],
            [
              { fotos: require("../assets/portfolios/blackDog/site/1.png") },
              { fotos: require("../assets/portfolios/blackDog/site/2.png") },
              { fotos: require("../assets/portfolios/blackDog/site/3.png") },
              { fotos: require("../assets/portfolios/blackDog/site/4.png") },
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
      console.log(this.up);
      if (this.up == true) {
        document.body.classList.add("overflowOn");
        // console.log("overflowOn");
      } else {
        document.body.classList.remove("overflowOn");
        // console.log("overflowOff");
      }
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
  margin-bottom: 20px;
}

h4 {
  font-size: 20px;
  color: #333333;
  margin-top: 20px;
  margin-bottom: 14px;
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
  width: calc(100% - 100px);
  max-width: var(--body_content_width);
  max-height: 1000px;

  padding: 40px;
  overflow-y: auto;
}
.description--popup {
  font-size: 16px;
}
.close {
  position: absolute;
  top: 16px;
  right: 3px;
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
  grid-template-columns: 1fr 450px;
  grid-template-areas: "f1 f2";
}

.grid_prof--first {
  grid-area: f1;
}
.grid_prof--second {
  grid-area: f2;
}

.img_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.img_size {
  height: 100%;
  width: 450px;
  object-fit: contain;
}

.outros {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 6px;
}
.trocarProjeto {
  cursor: pointer;
  padding: 0;
  border: none;
  height: 100px;
  width: 100%;
  object-fit: cover;
  outline: 6px solid rgba(0, 0, 0, 0);
  transition: 0.3s;
}
.trocarProjeto:hover,
.trocarProjeto:focus {
  outline: 6px solid #ffc800;
  transition: 0s;
  border-radius: 6px;
}
.trocarProjeto--img {
  width: 100%;
  object-fit: cover;
  height: 150px;
}

/* RESPONSIVIDADE */

@media only screen and (max-width: 900px) {
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 18px;
  }
  .pop_content {
    width: calc(100% - 24px);
    padding: 12px;
  }
  .description--popup {
    font-size: 14px;
    max-height: 150px;
    overflow: scroll;
  }
  .grid_prof {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "f2 f2" "f1 f1";
  }
}
@media only screen and (max-width: 450px) {
  .outros {
    margin: 0;
    gap: 0px;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 10px;
  }
}
</style>
