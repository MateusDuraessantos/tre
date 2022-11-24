const App = {
  data() {
    return {
      message: "Hello Element Plus",
      nos: "first",
      servicos: "primeiro",
      popup: false,
      imgPortfolio: [
        {
          id: 1,
          portfolios: [
            { image: "primeiro" },
            // { image: "/src/portfolios/blackDog/1 (3).png" },
            // { image: "/src/portfolios/blackDog/1 (2).png" },
          ],
          imgThumb: "/src/portfolios/blackDog/1 (3).png",
          text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },

        {
          id: 2,
          portfolios: [
            { image: "segundo" },
            // { image: "/src/portfolios/belezaDaVila/1 (4).png" },
            // { image: "/src/portfolios/belezaDaVila/1 (5).png" },
          ],
          imgThumb: "/src/portfolios/belezaDaVila/1 (4).png",
          text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
        {
          id: 3,
          portfolios: [
            { image: "terceiro" },
            // { image: "/src/portfolios/accesstage/1 (1).png" },
            // { image: "/src/portfolios/accesstage/1 (2).png" },
          ],
          imgThumb: "/src/portfolios/accesstage/1 (1).png",
          text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
      ],
    };
  },
  methods: {
    mateus() {
      this.popup = !this.popup;
    },
  },
};
const app = Vue.createApp(App);

app.use(ElementPlus);
app.mount("#app");
