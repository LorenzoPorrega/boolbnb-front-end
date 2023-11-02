import { createRouter, createWebHistory } from "vue-router"; 

    import ApartmentsPage from "./pages/ApartmentsPage.vue"

const routes = [
    {
        path: "/apartments",
        name: "home",
        component: ApartmentsPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export { router };