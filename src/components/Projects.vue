<template>
  <section id="projetos">
    <h2>projetos</h2>

    <div class="content_projetos">
      <div v-for="(projetosAll, index) in projetos" :key="index">
        <img class="thumb" :src="projetosAll.thumb" @click="pop(index)" />
      </div>
    </div>
    <!-- <div class="overlay" v-if="upPopup"> -->
    <div class="overlay" @click="overlay" v-if="upPopup">
      <div class="pop_content">
        <button class="close" @click="pop()">
          <img src="../assets/icons/close.svg" alt="close" />
        </button>
        <div class="grid_prof">
          <!-- 1° -->
          <div class="grid_prof--first">
            <div v-for="(dataInfos, index) in projetos[indexOfTitles].titleProject" :key="index">
              <h3>{{ dataInfos.princialTitle }}</h3>
              <div class="description--popup" v-for="(descricoesProjetc, index) in dataInfos.descricao" :key="index">
                {{ descricoesProjetc[indexOfSubtitle] }} <br />
              </div>
            </div>
          </div>
          <!-- 2° -->
          <div class="grid_prof--second">
            <h4 v-for="(dataInfos, index) in projetos[indexOfTitles]
            .titulosCarrossel[indexOfSubtitle]" :key="index">
              {{ dataInfos }}
            </h4>
            <el-carousel arrow="always">
              <el-carousel-item v-for="(dataInfos, index) in projetos[indexOfTitles]
              .outrosProjetos[indexOfSubtitle]" :key="index">
                <div class="img_container">
                  <img :src="dataInfos.fotos" :key="index" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <span v-if="projetos[indexOfTitles].outrosProjetos.length > 1">
          <h4>Outros projetos</h4>
          <div class="outros">
            <div @click="changeNumber(index)" v-for="(dataInfos, index) in projetos[indexOfTitles]
            .outrosProjetos" :key="index">
              <span v-for="(thumbOutrosProjetos, index) in dataInfos[0]" :key="index">
                <img class="trocarProjeto" :src="thumbOutrosProjetos" />
              </span>
            </div>
          </div>
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

        /* Palafita */
        {
          titleProject: [
            { princialTitle: "Palafita" },
            {
              descricao:
                [["A marca construída para a designer de interiores Nathalie, tem um processo de cocriação muito enriquecedor para as partes envolvidas. Projetamos e posicionamos os serviços gerando novas vertentes e desdobramentos para o negócio e transmitindo os valores do pessoal para o empresarial de maneira limpa e amigável."]],
            },
          ],

          thumb:
            "palafita/design-palafita-capa-identidade-segmentos-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "palafita/design-palafita-capa-identidade-segmentos-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "palafita/design-palafita-editorial-folder-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "palafita/design-palafita-editorial-folder-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "palafita/design-palafita-editorial-manual-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "palafita/design-palafita-identidade-papelaria-cartao-visita-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "palafita/design-palafita-identidade-web-site-trecomunicacao-01.jpg",
              },
            ],
          ],
        },
        /* Abrinq */
        {
          titleProject: [
            { princialTitle: "Abrinq" },
            {
              descricao:
                [["Somos parceiros desta organização há mais de 15 anos e prestamos serviços e suporte em design em muitos segmentos e necessidades, criação de marcas, identidade para campanhas e projetos e todo material editorial."]],
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
                [["A rede Black Dog de lanchonetes nos procurou para uma revitalização de marca. Esse trabalho veio carregado de uma percepção emocional muito importante, pois constatamos que a marca era extremamente querida pelos consumidores e não seria qualquer mudança que atenderia, então, mudar para deixar igual foi nossa missão. Profissionalizamos a comunicação sem perder a voz da marca que é simples e despojada."]],
            },
          ],

          thumb:
            "black_dog/design-black-dog-capa-editorial-cartaz-trecomunicacao-01.png",
          titulosCarrossel: [{ subTitle: "" }],
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
                [["A divisão de impressão profissional da multinacional japonesa tem nosso suporte em gerar material de prospecção e manuais de utilização."]],
            },
          ],

          thumb: "canon/design-canon-editorial-trecomunicacao.jpg",
          titulosCarrossel: [{ subTitle: "" }],
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
                [["Fomos procurados devido à necessidade de uma atualização na sua marca. Ao combinar valores tradicionais e contemporâneos, conseguimos alcançar um resultado limpo. Desenvolvemos desdobramentos da identidade da marca para cardápios e diversos materiais de comunicação visual para seus pontos de contato, serviços que oferecemos com frequência."]],
            },
          ],

          thumb:
            "cantina_gigio/design-cantina-gigio-capa-editorial-cardapio-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
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
                [["O desenvolvimento de embalagens por uma década para a C&C deu visibilidade e posicionamento para as marcas que criamos. Nós da Tre definimos com a diretoria da empresa onde queríamos chegar com as marcas. Sem publicidade externa apenas utilizando recursos internos das lojas, alcançamos o resultado com PDV e uma estratégia de embalagens, fidelizando clientes e transformando a loja em destino para aquele consumidor."]],
            },
          ],

          thumb:
            "cec/design-cec-capa-xhara-identidade-fachada-loja-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "cec/design-cec-capa-xhara-identidade-fachada-loja-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "cec/design-cec-capa-xhara-identidade-merchandising-trecomunicacao-01.jpg",
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
        /* EXP */
        {
          titleProject: [
            { princialTitle: "EXP" },
            {
              descricao:
                [["É uma empresa de consultoria e gerenciamento de obras de alta qualidade em arquitetura. Sua imagem já possuía índices e valores bem posicionados mas não alinhados com a identidade de marca. Esse foi nosso desafio e projeto realizado."]],
            },
          ],

          thumb:
            "exp/design-exp-capa-redes-sociais-instagram-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "exp/design-exp-capa-redes-sociais-instagram-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "exp/design-exp-capa-redes-sociais-instagram-trecomunicacao-02.jpg",
              },
              {
                fotos: "exp/design-exp-editorial-agenda-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "exp/design-exp-identidade-apresentacao-comercial-powerpoint-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "exp/design-exp-identidade-papelaria-trecomunicacao-01.jpg",
              },
              {
                fotos: "exp/design-exp-sinalizacao-trecomunicacao-01.jpg",
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
                [["A conceituação, criação, ensaio fotográfico de peças e recordações pessoais, desenvolvimento editorial e também o acompanhamento gráfico para o livro da família Medrano foi um presente para nossa equipe de design. Um projeto cheio de história e emoção. Adoramos desenvolver esse tipo de material."]],
            },
          ],

          thumb:
            "livro_nuestra_familia/design-nuestra-familia-capa-editorial-livro-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
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
        /* OTOH */
        {
          titleProject: [
            { princialTitle: "Otoh" },
            {
              descricao:
                [["Otoh é um projeto de identidade de marca, um produto/serviço desenvolvido para o núcleo de inovação da Harmonia Global. A marca tem como força a tipografia Bold e o detalhe da forma de seus sensores como diferencial em uma das suas letras ”O”."]],
            },
          ],

          thumb: "otoh/design-otoh-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos: "otoh/design-otoh-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "otoh/design-otoh-editorial-agenda-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "otoh/design-otoh-editorial-cartaz-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "otoh/design-otoh-editorial-manual-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "otoh/design-otoh-identidade-web-site-trecomunicacao-01.jpg",
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
                [["O clube Paineiras do Morumby teve nossa contribuição por 4 anos como gestor/diretor de marketing e projetos executivos, onde desenvolvemos uma revitalização total, da reestruturação da imagem da marca a sinalização e novo conceito editorial para sua revista e site, gestão 360, na ocasião, comemorando os 60 anos do clube paulistano."]],
            },
          ],

          thumb:
            "paineiras/design-paineiras-capa-editorial-manual-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
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
                [["O grupo de moda e acessórios Renner, nos chamou para revitalizar algumas embalagens de perfumes, hidratantes e kits de cosméticos sazonais para sua linha de cosméticos Alchemia, uma responsabilidade e tanto, sendo produzido em média 4 milhões de frascos entre seus produtos distribuídos por todo Brasil."]],
            },
          ],

          thumb:
            "renner/design-renner-alchemia-capa-embalagem-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "renner/design-renner-alchemia-capa-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "renner/design-renner-alchemia-embalagem-trecomunicacao-02.jpg",
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
                [["Um projeto gráfico de peso para SAP. Proposta de adequação visual de sua plataforma online voltada a clientes; Conjunto de banners para apresentação de novos conteúdos de podcast no Itunes e Google Play."]],
            },
          ],

          thumb: "sap/design-sap-capa-identidade-evento-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
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

        /* Temra */
        {
          titleProject: [
            { princialTitle: "Temra" },
            {
              descricao:
                [['O cuidado com a linguagem das imagens que produzimos para TEMRA fala muito de sua essência, simplicidade e tecnologia – fórmula campeã para criar animais com saúde.A linha de embalagem ganhou um toque de simplicidade e autenticidade: "somos o que somos, somos TEMRA" essa é a mensagem a ser passada pela identidade de marca, acompanhada de sua tagline "a nobreza do rústico".']],
            },
          ],

          thumb:
            "temra/design-temra-capa-identidade-embalagem-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "temra/design-temra-capa-identidade-embalagem-trecomunicacao-01.jpg",
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

        // 4 Artes 
        {
          titleProject: [
            { princialTitle: "4 Artes" },
            {
              descricao:
                [["Marca/selo para produtos cerâmicos da artista plástica Solange Braile, a ideia é que possa ser cravada/marcada em baixo relevo em peças diversas de suas coleções."]],
            },
          ],

          thumb:
            "4 Artes/design-4-artes-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "4 Artes/design-4-artes-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "4 Artes/design-4-artes-identidade-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "4 Artes/design-4-artes-identidade-trecomunicacao-03.jpg",
              },
            ],
          ],
        },

        // BlueBe 
        {
          titleProject: [
            { princialTitle: "BlueBe" },
            {
              descricao:
                [["A escola com linha educacional baseada na pedagogia de Emilia Reggio nos procurou para ajustar sua comunicação, e sua linha pedagógica foi a inspiração e parte da pesquisa para a linguagem desta marca que também recebeu um novo estudo de naming."]],
            },
          ],

          thumb:
            "BlueBe/design-bluebe-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "BlueBe/design-bluebe-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-editorial-folheto-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-editorial-manual-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-identidade-papelaria-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-identidade-papelaria-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-identidade-paredes-sociais-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "BlueBe/design-bluebe-identidade-web-site-trecomunicacao-01.jpg",
              },
            ],
          ],
        },

        // TaoTao
        {
          titleProject: [
            { princialTitle: "Tao Tao" },
            {
              descricao:
                [["Uma marca lúdica e cheia de empatia (um aceno) que cria surpresa e incita curiosidade. A ideia é que sua comunicação de marca abrace o imaginário de crianças."]],
            },
          ],

          thumb:
            "TaoTao/design-taotao-capa-identidade-projetos-especiais-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "TaoTao/design-taotao-capa-identidade-projetos-especiais-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "TaoTao/design-taotao-editorial-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "TaoTao/design-taotao-editorial-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "TaoTao/design-taotao-editorial-trecomunicacao-03.jpg",
              },
              {
                fotos:
                  "TaoTao/design-taotao-editorial-trecomunicacao-04.jpg",
              },
            ],
          ],
        },

        // Harmonia
        {
          titleProject: [
            { princialTitle: "Harmonia" },
            {
              descricao:
                [["Atendemos a empresa para refinar seu posicionamento e dar voz para a marca renovada. Também ajustamos o comportamento de linguagem para uso cromático e grafismos em sua comunicação."]],
            },
          ],

          thumb:
            "Harmonia/design-harmonia-capa-identidade-redes-sociais-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "Harmonia/design-harmonia-capa-identidade-redes-sociais-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Harmonia/design-harmonia-capa-identidade-redes-sociais-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "Harmonia/design-harmonia-editorial-maual-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Harmonia/design-harmonia-editorial-trecomunicacao-01.jpg",
              },
            ],
          ],
        },

        // SOL SOLO
        {
          titleProject: [
            { princialTitle: "SOL & SOLO" },
            {
              descricao:
                [['A empresa de orgânicos Sol & Solo tinha um grande problema de sonoridade por conta da sua grafia "solesolo". Esse fato fazia entender uma única palavra e por mais que isso fosse explicado, as pessoas erravam sua pronúncia. Para dar um novo posicionamento à questão, realizamos um estudo para o naming utilizando o "&" comercial e redesenhamos a marca e sua identidade visual.']],
            },
          ],

          thumb:
            "SOL _ SOLO/design-sol-e-solo-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-capa-identidade-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-editorial-flyer-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-editorial-outdoor-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "SOL _ SOLO/design-sol-e-solo-frota-sign-trecomunicacao-01.jpg",
              },
            ],
          ],
        },

        // Studio Magaldi Paisagismo
        {
          titleProject: [
            { princialTitle: "Studio Magaldi Paisagismo" },
            {
              descricao:
                [["Nova marca e site para Studio Magaldi Paisagismo, diferentes possibilidades gerando visibilidade dos projetos e interação com maior profundidade em conteúdos, expondo a nova identidade de marca, afinal, marca é cultura."]],
            },
          ],

          thumb:
            "Studio Magaldi Paisagismo/design-sudio-magaldi-paisagismo-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [{ subTitle: "" }],
          outrosProjetos: [
            [
              {
                fotos:
                  "Studio Magaldi Paisagismo/design-sudio-magaldi-paisagismo-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Studio Magaldi Paisagismo/design-sudio-magaldi-paisagismo-identidade-papelaria-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Studio Magaldi Paisagismo/design-sudio-magaldi-paisagismo-identidade-site-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Studio Magaldi Paisagismo/design-sudio-magaldi-paisagismo-identidade-site-trecomunicacao-02.jpg",
              },
            ],
          ],
        },

        /* exemplo */
        {
          titleProject: [
            { princialTitle: "Fazenda Marilio" },
            {
              descricao: [[
                'A Fazenda Marílio contratou-nos para desenvolver sua identidade visual. Para esta produtora de café de alta qualidade, optamos por retratar uma "janela para o campo", permitindo que seus apreciadores possam visualizar a plantação desta cultura.',
                "A marca para linha de cafés especiais premiados e também a criação das embalagens, foi fruto da pesquisa e imersão feita com a liderança da fazenda respondendo a uma demanda peculiar e inovadora.",
              ]
              ]
            },
          ],

          thumb: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-capa-identidade-trecomunicacao-01.jpg",
          titulosCarrossel: [
            { subTitle: "Identidade Visual " },
            { subTitle: "Café Marilio" },
          ],
          outrosProjetos: [
            [
              {
                fotos: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-capa-identidade-trecomunicacao-01.jpg",
              },
              {
                fotos: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-capa-identidade-trecomunicacao-02.jpg",
              },

              {
                fotos: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-capa-identidade-trecomunicacao-03.jpg",
              },

              {
                fotos: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-identidade-papelaria-trecomunicacao-01.jpg",
              },
              {
                fotos: "Fazenda Marilio - 1 Empresa/design-fazenda-marilio-identidade-web-site-trecomunicacao-01.jpg",
              },
            ],
            [
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-capa-identidade-embalagem-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-capa-identidade-embalagem-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-identidade-redes-sociais-trecomunicacao-01.jpg",
              },
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-identidade-redes-sociais-trecomunicacao-02.jpg",
              },
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-identidade-redes-sociais-trecomunicacao-03.jpg",
              },
              {
                fotos:
                  "Fazenda Marilio - 2 Café Marcéu (Produto)/design-cafe-marilio-identidade-redes-sociais-trecomunicacao-04.jpg",
              },
            ],
          ],
        },
      ],
    };
  },

  methods: {


    changeNumber(x) {
      this.indexOfSubtitle = x;
      // console.log(this.indexOfSubtitle);
    },
    pop(n) {
      this.upPopup = !this.upPopup;
      // console.log(this.upPopup);
      this.indexOfTitles = n;
      if (this.upPopup == true) {
        document.body.classList.add("overflowOn");
      } else {
        document.body.classList.remove("overflowOn");
      }
      this.indexOfSubtitle = 0;
    },
    overlay(s) {
      var a = s.target.classList[0];
      // console.log(a);
      if (a == "overlay") {
        this.upPopup = !this.upPopup;
        document.body.classList.remove("overflowOn");
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
  transition: 2s;
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
  border-radius: 6px;
  margin: auto;
  background: white;
  width: 100vw;
  width: calc(100% - 100px);
  max-width: var(--body_content_width);
  max-height: 600px;
  padding: 40px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2) !important;
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
  justify-content: start;
  margin-top: 30px;
  gap: 6px;
}

.trocarProjeto {
  cursor: pointer;
  padding: 0;
  border: none;
  height: 100px;
  width: 100%;
  max-width: 100px;
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
