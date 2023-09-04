//https://ru.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
import TelephoneInput from "../components/TelephoneInput.vue";

const components = [TelephoneInput];

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  components.forEach((component) => {
    Vue.use(component);
  });
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default { TelephoneInput };
