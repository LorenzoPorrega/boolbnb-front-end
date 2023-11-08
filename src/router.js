import { createRouter, createWebHistory } from "vue-router"; 

import ApartmentsPage from "./pages/ApartmentsPage.vue"
import ShowPage from "./pages/ShowPage.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: ApartmentsPage
    },
    {
        path: "/:id",
        name: "show",
        component:ShowPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export { router };