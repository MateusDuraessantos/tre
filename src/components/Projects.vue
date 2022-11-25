<template>
  <div id="projetos">
    <h2>projetos</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: "Projects",
    };
  },
};
</script>

<style scoped>
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

#projetos h2 {
  color: #28b2ed;
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
.thumb {
  cursor: pointer;
  width: 100%;
  height: 200px;
  object-fit: cover;
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
</style>
