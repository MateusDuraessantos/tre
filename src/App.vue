<template>
  <Nav />
  <Header gap_bottom />
  <main>
    <Nos gap_bottom />
    <Servicos gap_bottom />
    <Projects gap_bottom />
    <!-- router -->
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Nos from "./components/Nos.vue";
import Servicos from "./components/Servicos.vue";
import Projects from "./components/Projects.vue";
export default {
  name: "App",
  components: { Projects, Nos, Servicos, Header, Nav, Footer },
  data() {
    return {
      first: "first",
      primeiro: "primeiro",
    };
  },
};
</script>

<style>
.el-carousel__arrow {
  color: gray;
}

.el-carousel__button {
  opacity: 0.2;
}
.el-carousel__button {
  background-color: black;
}

.overflowOn {
  overflow: hidden;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Roboto', sans-serif; */
* {
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-top: 60px;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
:root {
  --body_content_width: 900px;
}
a {
  text-decoration: none;
  color: black;
}

[gap_bottom] {
  margin-bottom: 20px;
}

#nos,
#projetos,
#servicos {
  width: 100%;
  max-width: var(--body_content_width);
}
.el-tab-pane {
  color: #4d4d4d;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
h1 {
  font-size: 24px;
  color: #4d4d4d;
  font-weight: 400;
  width: 100%;
  max-width: var(--body_content_width);
}
h2 {
  font-size: 40px;
  font-weight: 900;
  margin-top: 65px;
}

/* Scroll Style */

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: white;
}

*::-webkit-scrollbar-thumb {
  background-color: #b2b1b1;
  border-radius: 20px;
  border: 3px solid white;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
}
.demo-tabs .el-tab-pane {
  height: 100px;
}

@media only screen and (max-width: 900px) {
  .demo-tabs .el-tab-pane {
    height: 200px;
    overflow: auto;
  }
  h2 {
    margin-top: 26px;
  }
}

@media only screen and (max-width: 450px) {
  main {
    margin: 0 10px;
  }
}
</style>
