import { createWebHistory, createRouter } from "vue-router"
import Generate from '../components/Generate.vue'
import Info from '../components/Info.vue'
import Main from '../components/Main.vue'

const routes = [
    {
        path: "/generate",
        name: "Generate",
        component: Generate,
    },
    {
        path: "/info",
        name: "Info",
        component: Info,
    },
    {
        path: "/",
        name: "Main",
        component: Main,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;