import { createRouter, createWebHistory } from "vue-router"; 

import ApartmentsPage from "./pages/ApartmentsPage.vue";
import ApartmentsShowPage from "./pages/apartments/Show.vue";
// import componente jolly per url sbagliati o sconosciuti richiesti dall'utente
import NotFound from "./pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: ApartmentsPage
    },
    {
        //Show di un singolo apartment
        path: "/apartments/:slug",
        name: "apartments.show",
        component: ApartmentsShowPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export { router };