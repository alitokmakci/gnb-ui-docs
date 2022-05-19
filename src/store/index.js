import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      version: "0.2.1",
      download_link:
        "https://github.com/alitokmakci/gnb-ui/releases/download/v.0.2.1-alpha/GNBUI-0.2.1-alpha.zip",
      cdn_link:
        "https://cdn.jsdelivr.net/npm/gnb-ui@0.2.1-alpha/dist/gnb.min.css",
    };
  },
  mutations: {},
});

export default store;
