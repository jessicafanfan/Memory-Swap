import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import ToggleButton from "vue-js-toggle-button";

Vue.use(ToggleButton);

const requireComponent = require.context(
  "./components",
  false,
  // Only include "Base" prefixed .vue files
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName =
    // Gets the file name regardless of folder depth
    fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");