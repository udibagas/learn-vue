import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import Button from "./components/ui/Button.vue";

createApp(App).component("Button", Button).mount("#app"); // create app instance & mount it to the DOM
