import type { RouterConfig } from '@nuxt/schema'
import { indexRoutes } from '../routes/index.route'
import { createRouter, createWebHistory } from "vue-router";

export default <RouterConfig>{
    // history: createWebHistory,
    routes: (_routes) => [
        ...indexRoutes
    ],
}
