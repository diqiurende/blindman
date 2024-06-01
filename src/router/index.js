import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'patient',
            component: () => import('../views/PatientView.vue')
        }, {
            path: '/identify',
            name: 'identify',
            component: () => import('../views/IdentifyView.vue')
        }, {
            path: '/example',
            name: 'example',
            component: () => import('../views/ExampleView.vue')
        }
    ]
})

export default router
