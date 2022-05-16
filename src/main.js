import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import scss from "highlight.js/lib/languages/scss";
import css from "highlight.js/lib/languages/css";
import bash from "highlight.js/lib/languages/bash";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/atom-one-dark.css";
import "./assets/gnb.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("css", css);
hljs.registerLanguage("bash", bash);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(hljsVuePlugin);

app.mount("#app");
