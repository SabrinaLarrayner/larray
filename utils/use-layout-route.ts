
function guardDefault(to: any, from: any, next: any) {
    next()
  }
  
  export function useLayoutRoute(routes: any[], Layout: string, guard = guardDefault) {
    return {
        path: '/',
        component: () => import(`@/layouts/${Layout}.vue`),
        children: routes.map(route => {
            return {
                guard,
                props: true,
                ...route
            }
        })
    }
  }