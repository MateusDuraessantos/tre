<template>
  <nav>
    <div class="flex">
      <figure>
        <img src="imagens_site_tre_2023/assets/logoComNome.svg" />
      </figure>
      <ul @click="hashSemHash">
        <li><a href="#inicio">início</a></li>
        <li><a href="#nos">nós</a></li>
        <li><a href="#servicos">serviços</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#footer">contatos</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      first: "nav",
    };
  },
  methods: {
    hashSemHash(e) {
      setTimeout(() => {
        history.pushState("", document.title, location.pathname)

        e.preventDefault()
      }, 3);

    },
  }



};
</script>
<style scoped>
nav {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 10;
  height: 60px;
  padding: 0 20px;
  width: 100%;
  background-size: cover;
  background: #f8f8f8;
}

.content_tabs {
  width: 70%;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  max-width: var(--body_content_width);
}

figure {
  margin: 0;
}

figure img {
  height: 50px;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 26px;
  list-style-type: none;
  cursor: pointer;
}

ul a {
  color: #777;
  transition: 0.2s;
}

ul a:hover {
  color: black;
  transition: 0.2s;
}

@media only screen and (max-width: 450px) {
  ul {
    display: none;
  }
}
</style>
