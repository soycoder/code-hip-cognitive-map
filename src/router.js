import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Info from './components/Info.vue';
import Experiment1 from './components/Experiment1.vue';
import Experiment2 from './components/Experiment2.vue';
import Thank from './components/Thank.vue';


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/info",
        name: "info",
        component: Info,
    },
    {
        path: "/exp1",
        name: "Experiment1",
        component: Experiment1,
    },

    {
        path: "/exp2",
        name: "Experiment2",
        component: Experiment2,
    },
    {
        path: "/bye",
        name: "Thank",
        component: Thank,
    },
];


const router = createRouter({
    history: createWebHistory(),routes,
});

export default router