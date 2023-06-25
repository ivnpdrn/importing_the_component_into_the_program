import Counter from "./counter.js";

const app = Vue.createApp({
  components: {
    Counter: Counter
  },
  template: "<Counter />"
});

const vm = app.mount("#app");
