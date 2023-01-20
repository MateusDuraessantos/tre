<template>
  <section id="projetos">
    <h2>projetos</h2>

    <div class="content_projetos">
      <div v-for="(projetosAll, index) in projetos" :key="index">
        <img class="thumb" :src="projetosAll.thumb" @click="pop(index)" />
      </div>
    </div>
    <!-- <div class="overlay" v-if="upPopup"> -->
    <div class="overlay" v-if="upPopup">
      <div class="pop_content">
        <button class="close" @click="pop()">
          <img src="../assets/icons/close.svg" alt="" />
        </button>
        <div class="grid_prof">
          <!-- 1° -->
          <div class="grid_prof--first">
            <div
              v-for="(dataInfos, index) in projetos[indexOfTitles].titleProject"
              :key="index"
            >
              <h3>{{ dataInfos.princialTitle }}</h3>
              <div class="description--popup">{{ dataInfos.descricao }}</div>
            </div>
          </div>
          <!-- 2° -->
          <div class="grid_prof--second">
            <h4
              v-for="(dataInfos, index) in projetos[indexOfTitles]
                .titulosCarrossel[indexOfSubtitle]"
              :key="index"
            >
              {{ dataInfos }}
            </h4>
            <el-carousel arrow="always">
              <el-carousel-item
                v-for="(dataInfos, index) in projetos[indexOfTitles]
                  .outrosProjetos[indexOfSubtitle]"
                :key="index"
              >
                <div class="img_container">
                  <img :src="dataInfos.fotos" :key="index" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <span v-for="(ocultarOutrosProjetos, index) in projetos" :key="index">
          <span v-if="ocultarOutrosProjetos.outrosProjetos.length > 1">
            <h4>Outros projetos</h4>
            <div class="outros">
              <div
                @click="changeNumber(index), borda()"
                v-for="(dataInfos, index) in projetos[indexOfTitles]
                  .outrosProjetos"
                :key="index"
              >
                <span
                  v-for="(thumbOutrosProjetos, index) in dataInfos[0]"
                  :key="index"
                >
                  <img class="trocarProjeto" :src="thumbOutrosProjetos" />
                </span>
              </div>
            </div>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      upPopup: false,
      indexOfTitles: 0,
      indexOfSubtitle: 0,
      projetos: [
        /* 
        Extrutura padrão dos projetos, NÃO DELETAR!
        {
          titleProject: [
            { princialTitle: "Titulo principal do projeto" },
            {
              descricao:
                "Descrição do projeto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur doloribus blanditiis corporis consequuntur sit facere quisquam reiciendis aperiam dolorum amet, qui voluptatibus totam aspernatur, expedita incidunt suscipit temporibus nihil.",
            },
          ],

          thumb: "Adicionar caminho da thumbnail Principal do projeto",
          titulosCarrossel: [
            { subTitle: "Primeiro título do projeto" },
            { subTitle: "Segundo título do projeto" },
          ],
          outrosProjetos: [
            [
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
            ],
            [
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
              {
                fotos: "Caminho das imagens do carrossel",
              },
            ],
          ],
        }, */
        /* Abrinq */
        {
          titleProject: [
            { princialTitle: "Abrinq" },
            {
              descricao:
                "A marca Beleza da Vila é concebida pelo traçado de tipografias atemporais que remetem aos magazines e sua atmosfera de moda e mundo fashion em sua melhor performance, uma elegância natural sem fetiches ou tendencias, sem moldes ou preconceitos. Nossa coloração é a dupla perfeita, o casamento entre um rosa inocente e o preto misterioso do olhar que só o feminino é capaz de produzir.",
            },
          ],

          thumb:
            "abrinq/design-abrinq-capa-editorial-relatorios-trecomunicacao-01.png",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "abrinq/design-abrinq-capa-editorial-relatorios-trecomunicacao-01.png",
              },
              {
                fotos:
                  "abrinq/design-abrinq-editorial-relatorios-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "abrinq/design-abrinq-editorial-relatorios-trecomunicacao-03.jpg",
              },
              {
                fotos:
                  "abrinq/design-abrinq-editorial-relatorios-trecomunicacao-04.jpg",
              },
            ],
          ],
        },
        /* Black Dog */
        {
          titleProject: [
            { princialTitle: "Black Dog" },
            {
              descricao:
                "A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca, esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada.",
            },
          ],

          thumb:
            "black_dog/design-black-dog-capa-editorial-cartaz-trecomunicacao-01.png",
          titulosCarrossel: [{ subTitle: "Black Dog" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "black_dog/design-black-dog-capa-editorial-cartaz-trecomunicacao-01.png",
              },
              {
                fotos:
                  "black_dog/design-black-dog-editorial-cardapio-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "black_dog/design-black-dog-editorial-cardapio-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "black_dog/design-black-dog-editorial-manual-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "black_dog/design-black-dog-merchandising-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /* Canon */
        {
          titleProject: [
            { princialTitle: "Canon" },
            {
              descricao:
                "Desde 2008, criamos e desenvolvemos uma variedade de materiais impressos para a Canon nos segmentos de câmeras e impressoras, entre os quais convites, catálogos de produto e catálogos gerais, folders para eventos, anúncios de revista e cadernos, além de adaptar alguns deles para boletins eletrônicos.",
            },
          ],

          thumb: "canon/design-canon-editorial-trecomunicacao.jpg",
          titulosCarrossel: [{ subTitle: "Canon" }],
          outrosProjetos: [
            [
              {
                fotos: "canon/design-canon-editorial-trecomunicacao.jpg",
              },
            ],
          ],
        },
        /* Cantina Gigio */
        {
          titleProject: [
            { princialTitle: "Cantina Gigio" },
            {
              descricao:
                "A conhecida cantina italiana situada nos bairros de Pinheiros e Brás - São Paulo, nos procurou para uma atualização de sua marca. Isso envolveu a criação e desenvolvimento de todo o seu ambiente gráfico, bem como seus pontos de contato, como Papelaria básica, cardápios, etc.",
            },
          ],

          thumb:
            "cantina_gigio/design-cantina-gigio-capa-editorial-cardapio-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "Cantina Gigio" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "cantina_gigio/design-cantina-gigio-capa-editorial-cardapio-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cantina_gigio/design-cantina-gigio-merchandising-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cantina_gigio/design-cantina-gigio-redes_sociais-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cantina_gigio/design-cantina-gigio-redes_sociais-trecomunicacao-02.jpg",
              },
            ],
          ],
        },
        /* CeC */
        {
          titleProject: [
            { princialTitle: "CeC" },
            {
              descricao:
                "O desenvolvimento de embalagens por uma década para a C&C deu visibilidade e posicionamento para as marcas que criamos. Nós da Tre definimos com a diretoria da empresa onde queríamos chegar com as marcas. Sem publicidade externa apenas utilizando recursos internos das lojas, alcançamos o resultado com PDV e uma estratégia de embalagens, fidelizando clientes e transformando a loja em destino para aquele consumidor.",
            },
          ],

          thumb:
            "cec/design-cec-capa-xhara-identidade-merchandising-trecomunicacao-01.png",
          titulosCarrossel: [{ subTitle: "CeC" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "cec/design-cec-capa-xhara-identidade-merchandising-trecomunicacao-01.png",
              },
              {
                fotos:
                  "cec/design-cec-casanova-identidade-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cec/design-cec-casanova-identidade-embalagem-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "cec/design-cec-metropac-identidade-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cec/design-cec-smart-identidade-embalagem-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /* Livro Nuestra Familia */
        {
          titleProject: [
            { princialTitle: "Livro Nuestra Familia" },
            {
              descricao:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius, non harum repudiandae nulla facere aperiam magnam velit? Inventore iure veritatis rem nostrum quasi accusamus ad alias sunt voluptatum expedita.",
            },
          ],

          thumb:
            "livro_nuestra_familia/design-nuestra-familia-capa-editorial-livro-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "Livro Nuestra Familia" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "livro_nuestra_familia/design-nuestra-familia-capa-editorial-livro-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "livro_nuestra_familia/design-nuestra-familia-editorial-livro-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "livro_nuestra_familia/design-nuestra-familia-editorial-livro-trecomunicacao-03.jpg",
              },
            ],
          ],
        },
        /* Paineiras */
        {
          titleProject: [
            { princialTitle: "Paineiras" },
            {
              descricao:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius, non harum repudiandae nulla facere aperiam magnam velit? Inventore iure veritatis rem nostrum quasi accusamus ad alias sunt voluptatum expedita.",
            },
          ],

          thumb:
            "paineiras/design-paineiras-capa-editorial-manual-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "Paineiras" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "paineiras/design-paineiras-capa-editorial-manual-identidade-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "paineiras/design-paineiras-editorial-livro-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "paineiras/design-paineiras-editorial-livro-trecomunicacao-03.jpg",
              },
              {
                fotos:
                  "paineiras/design-paineiras-editorial-revista-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "paineiras/design-paineiras-editorial-revista-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "paineiras/design-paineiras-sinalizacao-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /* Renner Alchemia */
        {
          titleProject: [
            { princialTitle: "Renner Alchemia" },
            {
              descricao:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius, non harum repudiandae nulla facere aperiam magnam velit? Inventore iure veritatis rem nostrum quasi accusamus ad alias sunt voluptatum expedita.",
            },
          ],

          thumb:
            "renner_alchemia/design-renner-alchemia-capa-embalagem-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "Renner Alchemia" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "renner_alchemia/design-renner-alchemia-capa-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "renner_alchemia/design-renner-alchemia-embalagem-trecomunicacao-02.jpg",
              },
            ],
          ],
        },
        /* SAP */
        {
          titleProject: [
            { princialTitle: "SAP" },
            {
              descricao:
                "A SAP – empresa alemã, líder em gestão de negócios no mundo – demandou uma análise de diretrizes visuais estabelecidas pela matriz e adequação de algumas peças à tais normas. Os projetos consistiram em: Estruturação visual entre a marca principal e suas submersas / produtos, à fim de estabelecer uma hierarquia visual para o seu uso; Backdrop criado para servir de fundo para video-aulas e apresentações; Proposta de adequação visual de uma plataforma online voltada a clientes; Conjunto de banners para apresentação de novos conteúdos de podcast no Itunes e Google Play.",
            },
          ],

          thumb: "sap/design-sap-capa-identidade-evento-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "SAP" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "sap/design-sap-capa-identidade-evento-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "sap/design-sap-identidade-iconografia-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "sap/design-sap-identidade-podcast-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /*  */
        {
          titleProject: [
            { princialTitle: "Temra" },
            {
              descricao:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius, non harum repudiandae nulla facere aperiam magnam velit? Inventore iure veritatis rem nostrum quasi accusamus ad alias sunt voluptatum expedita.",
            },
          ],

          thumb:
            "temra/design-temra-capa-identidade-embalagem-trecomunicacao-01.png",
          titulosCarrossel: [{ subTitle: "Temra" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "temra/design-temra-capa-identidade-embalagem-trecomunicacao-01.png",
              },
              {
                fotos:
                  "temra/design-temra-identidade-embalagem-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "temra/design-temra-identidade-papelaria-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "temra/design-temra-identidade-site-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /*  */
        /* {
          titleProject: [
            { princialTitle: "" },
            {
              descricao: "",
            },
          ],

          thumb: "/",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos: "/",
              },
              {
                fotos: "/",
              },
              {
                fotos: "/",
              },
              {
                fotos: "/",
              },
            ],
          ],
        }, */
      ],
    };
  },

  methods: {
    changeNumber(n) {
      this.indexOfSubtitle = n;
      console.log(this.indexOfSubtitle);
    },
    pop(n) {
      this.upPopup = !this.upPopup;
      this.indexOfTitles = n;
      console.log(this.upPopup);
      if (this.upPopup == true) {
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
  width: 100vw;
  height: 100vh;
  z-index: 20;
}

.pop_content {
  position: relative;
  margin: auto;
  background: white;
  width: 100vw;
  width: calc(100% - 100px);
  max-width: var(--body_content_width);
  max-height: 600px;
  padding: 40px;
}
.description--popup {
  font-size: 16px;
}
.close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
  z-index: 1;
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
    max-height: calc(100vh - 24px);
    overflow-y: auto;
  }
  .description--popup {
    font-size: 14px;
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
  .pop_content {
    width: calc(100% - 24px);
    padding: 12px;
    overflow-y: auto;
  }

  .content_projetos {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
