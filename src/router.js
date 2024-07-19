import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppAboutMe from './views/AppAboutMe.vue';
import AppProjectList from './views/AppProjectList.vue';
import AppTechList from './views/AppTechList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/aboutMe',
            name: 'aboutMe',
            component: AppAboutMe
        },
        {
            path: '/projectList',
            name: 'projectList',
            component: AppProjectList
        },
        {
            path: '/techList',
            name: 'techList',
            component: AppTechList
        },
    ]
});
export { router };