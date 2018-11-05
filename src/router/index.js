import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Videos from '@/components/Videos';
import Pictures from '@/components/Pictures';
import Jobs from '@/components/jobs/Jobs';
import Vip from '@/components/Vip';
import Login from '@/components/user/Login';
import Signup from '@/components/user/Signup';
import UserAuth0Callback from '@/components/user/Auth0Callback';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/videos',
            name: 'Videos',
            component: Videos
        },
        {
            path: '/pictures',
            name: 'Pictures',
            component: Pictures
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: Jobs
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        },
        {
            path: '/user/login',
            name: 'UserLogin',
            component: Login
        },
        {
            path: '/user/auth0/callback',
            name: 'user-auth0-callback',
            component: UserAuth0Callback
        },
        {
            path: '/user/signup',
            name: 'UserSignup',
            component: Signup
        },
        {
            path: '/meta/legal',
            component: () => import('@/components/meta/legal/Legal.vue'),
            children: [
                {
                    path: 'pp',
                    name: 'MetaLegalPrivacyPolicy',
                    component: () => import('@/components/meta/legal/PP.vue')
                },
                {
                    path: 'tou',
                    name: 'MetaLegalTermsOfUse',
                    component: () => import('@/components/meta/legal/TOU.vue')
                }
            ]
        },
        {
            path: '*',
            component: () => import('@/components/layout/NotFound.vue')
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     let currentUser = firebase.auth().currentUser;
//     let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     if (requiresAuth && !currentUser) next('login')
//     else if (!requiresAuth && currentUser) next('hello')
//     else next()
//   })

export default router;