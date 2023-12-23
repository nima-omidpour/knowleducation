import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import { makeServer } from "./server";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are importing the CSS

if (process.env.NODE_ENV === "development") {
  makeServer();
}
createApp(App).mount("#app");
