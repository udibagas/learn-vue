import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import Button from "./components/ui/Button.vue";
import route from "./route"; // Import the router configuration

createApp(App)
  .use(route) // Use the router in the app
  .component("Button", Button)
  .mount("#app"); // create app instance & mount it to the DOM
