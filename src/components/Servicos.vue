<template>
  <section id="servicos">
    <h2>serviços</h2>
    <el-tabs
      v-model="primeiro"
      class="demo-tabs tabs_servicos"
      @tab-click="handleClick"
    >
      <el-tab-pane label="naming" name="primeiro"
        >Criação de “nomes” para empresas, produtos, serviços, entidades e até
        mesmo para pessoas públicas, faz parte da modalidade de trabalho de
        construção de identidade de marca. Um nome tem o índice determinante de
        posicionar sem muito explicar, assim, criação de nome ou naming faz
        parte da estratégia como um todo e tem fundamental
        importância.</el-tab-pane
      >
      <el-tab-pane label="identidade da marca" name="segundo">
        Criação e desenvolvimento de identidade para marcas, branding ou gestão
        de marcas; todos estes termos são sobrepostos em diversas literaturas e
        autores, mas a experiência construída em 30 anos de projeto de marca tem
        nos colocado em consonância com esta tarefa e temos construído para
        nossos clientes um bom diálogo entre marcas e seus usuários. Marca é
        batismo.
      </el-tab-pane>
      <el-tab-pane label="card design" name="tercerio">
        A cara da sua empresa em um cartão e mais, com todos os possíveis itens
        de segurança pensados estrategicamente no projeto de design, alinhado
        com o DNA da sua marca, sim fazemos isso a mais de 15 anos.
      </el-tab-pane>
      <el-tab-pane label="comunicação da marca" name="quarto">
        O suporte de comunicação online e off-line que sua marca necessita para
        atingir seus públicos, discutir comunicação a partir da marca e seu DNA
        é muito diferente de fazer comunicação de algo a ser dito, marca é
        essência e a promessa precisa estar alinhado desde sempre.
      </el-tab-pane>
      <el-tab-pane label="eventos" name="quinto">
        Atividade estratégica de construção de conteúdo e engajamento para
        marca. Uma experiência vivencial onde públicos internos e externos de
        maneira lúdica geram resultados surpreendentes para alcançar os
        objetivos e propósitos da marca.
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
export default {
  data() {
    return {
      primeiro: "primeiro",
    };
  },
};
</script>

<style scoped>
#servicos h2 {
  color: #e87aa7;
}
</style>

<style>
.tabs_servicos .el-tabs__item.is-active {
  color: #e87aa7;
}
.tabs_servicos .el-tabs__active-bar {
  background: #e87aa7;
}

.demo-tabs .el-tab-pane {
  height: 100px;
}
</style>
