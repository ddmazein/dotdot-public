//https://ru.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
import * as components from "./components/index.js";

const dotDotComponents = {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  },
};

export default dotDotComponents;
