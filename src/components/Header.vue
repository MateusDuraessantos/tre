<template>
  <header id="inicio">
    <nav>
      <figure>
        <img src="../assets/logoComNome.svg" />
      </figure>
      <ul>
        <li><a href="#inicio">inicio</a></li>
        <li><a href="#nos">nós</a></li>
        <li><a href="#servicos">serviços</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="footer">contatos</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      first: "header",
    };
  },
};
</script>
<style scoped>
#inicio {
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  height: 46px;
  padding: 0 20px;
  width: 100%;
  background-size: cover;
}

.content_tabs {
  width: 70%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  max-width: var(--body_content_width);
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
</style>
