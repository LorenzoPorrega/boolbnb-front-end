import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
/* import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scss/general.scss';

import App from './App.vue'
import { router } from "./router";

createApp(App).use(router).mount('#app')
