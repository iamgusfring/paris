import { createRouter, createWebHistory } from 'vue-router';


import Home from "@/components/frontend/Home.vue";
import AboutUs from "@/components/frontend/AboutUs.vue";

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
]

export default createRouter({
    history: createWebHistory(),
    routes
})

