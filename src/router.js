import { createRouter, createWebHistory } from "vue-router"; 

import ApartmentsPage from "./pages/ApartmentsPage.vue";
import ApartmentsShowPage from "./pages/ShowApartment.vue";
import ContactsPage from "./pages/Contacts.vue";
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
        name: "show",
        component: ApartmentsShowPage,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: ContactsPage,
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