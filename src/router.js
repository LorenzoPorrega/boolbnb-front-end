import { createRouter, createWebHistory } from "vue-router"; 

import ApartmentsPage from "./pages/ApartmentsPage.vue";
// import componente jolly per url sbagliati o sconosciuti richiesti dall'utente
import NotFound from "./pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: ApartmentsPage
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export { router };