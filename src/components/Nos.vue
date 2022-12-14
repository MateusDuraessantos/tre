<template>
  <section id="nos">
    <h2>nós</h2>
    <el-tabs
      v-model="first"
      class="demo-tabs tabs_nos"
      @tab-click="handleClick"
    >
      <el-tab-pane label="histórico" name="first">
        A Tre Comunicação atua no mercado de design desde 1990, quando fundada
        pelo designer Kito Castanha. Geradora de competências ao relacionar
        criatividade, arte e suporte empresarial, construimos junto aos clientes
        posicionamento claro e comunicação eficiente para seus mercados. Nosso
        propósito é permear a competência do design dentro das corporações,
        disseminando o valor do design para a sociedade.
      </el-tab-pane>
      <el-tab-pane label="valores" name="second">
        Toda a condução de trabalho vem de nossos valores. Como eixo,
        estabelecemos metas empresariais compatíveis com o desenvolvimento
        sustentável para a sociedade, de forma a colaborar com a preservação dos
        recursos ambientais e culturais para as gerações futuras. Segundo nosso
        entendimento, isso fortalece uma linha de pensamento coerente com a
        diversidade, quando projetamos e promovemos a redução da desigualdade
        social em nossas atitudes diárias.
      </el-tab-pane>
      <el-tab-pane label="design" name="third">
        Design é uma atividade criativa, cuja finalidade é estabelecer as
        qualidades multifacetadas de objetos, processos, serviços e seus
        sistemas visuais, compreendendo todo seu ciclo de vida. O elemento
        central da humanização, o pensamento inovador, tecnológico e o fator
        crucial para o intercâmbio econômico e cultural. Em toda ação de
        comunicação, fazemos uso da razão e emoção como chaves de leitura para
        um entendimento mais amplo do DNA da marca, amparados por teorias
        consagradas e novas explorações intelectuais dentro do universo do
        design.
      </el-tab-pane>
      <el-tab-pane label="trepulantes" name="fourth">
        Gente que faz o que gosta. Somos um time formado por gente engajada em
        áreas de pesquisa e projeto, com perfil multidisciplinar e
        interdisciplinar, atendendo com excelência as demandas contemporâneas do
        mercado e sociedade.
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
export default {
  name: "Nos",
  data() {
    return {
      first: "first",
    };
  },
};
</script>

<style scoped>
#nos h2 {
  color: #ffc800;
}
</style>

<style>
.tabs_nos .el-tabs__item {
  transition: 0.1s;
}

.tabs_nos .el-tabs__item:hover {
  transition: 0.1s;
  color: #ffc800;
}

.tabs_nos .el-tabs__item.is-active {
  color: #ffc800;
}
.tabs_nos .el-tabs__active-bar {
  background: #ffc800;
}
</style>
