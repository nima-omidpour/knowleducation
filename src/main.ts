import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}
createApp(App).mount("#app");
