import { useLayoutRoute } from '../../utils/use-layout-route'

const routes = [
    {
        name: 'AuthSignIn',
        path: '/login',
        component: () => import("../../pages/auth/auth-sing-in/AuthSingIn.vue"),
        meta: {
            public: true
        }
    },
]

export const authSignInRoute = useLayoutRoute(routes, "LayoutAuth")
