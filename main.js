import Counter from "./counter.js";

const app = Vue.createApp({});
app.component("counter", Counter);

const vm = app.mount("#app");
