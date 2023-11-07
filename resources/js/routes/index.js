import { createRouter, createWebHistory } from 'vue-router';


import Home from "@/components/frontend/Home.vue";
import AboutUs from "@/components/frontend/AboutUs.vue";
import Create from "@/components/frontend/Create.vue";

const routes = [
    { 
        path: '/', 
        name: 'frontend.home',
        component: Home 
    },
    { 
        path: '/frontend/aboutus', 
        name: 'frontend.aboutus',
        component: AboutUs 
    },
    { 
        path: '/frontend/create', 
        name: 'frontend.create',
        component: Create 
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

