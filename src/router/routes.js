const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },
    {
        path: '/stego',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Stego.vue')
        }]
    },
    {
        path: '/stego2',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Stego2.vue')
        }]
    },
    {
        path: '/about',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/About.vue')
        }]
    },
    {
        path: '/auth',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Auth.vue')
        }]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes