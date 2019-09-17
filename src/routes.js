import VueRouter from 'vue-router';
import Vue from 'vue'

import mainPage from './components/mainPages/mainPage.vue';
import news from './components/mainPages/news.vue'
import about from './components/mainPages/about.vue'
import yessydo from './components/mainPages/yessydo.vue'
import preYessydo from './components/mainPages/pre-yessydo.vue'
import contact from './components/mainPages/contact.vue'
import activiteiten from './components/mainPages/activiteiten.vue'
import agenda from './components/mainPages/agenda.vue'
import kleurrijk from './components/mainPages/kleurrijk.vue'
import pannenkoeken from './components/mainPages/pannenkoeken.vue'
import huiskamer from './components/mainPages/huiskamer.vue'
import foto from './components/mainPages/Foto.vue'

const router = new VueRouter({
    base: __dirname,
    routes: [
        {
            path: '/home',
            component: mainPage
        },
        {
            path: '/activiteiten/kleurrijk',
            component: kleurrijk
        },
        {
            path: '/activiteiten/huiskamer',
            component: huiskamer
        },
        {
            path: '/activiteiten/pannenkoeken',
            component: pannenkoeken
        },
        {
            path: '/nieuws',
            component: news
        },
        {
            path: '/overons',
            component: about
        },
        {
            path: '/jeugdorkestYessydo',
            component: yessydo
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/Activiteiten',
            component: activiteiten
        },
        {
            path: '/preYessydo',
            component: preYessydo
        },
        {
            path: '/agenda',
            component: agenda
        },
        {
            path: '/foto',
            component: foto
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

export {router};