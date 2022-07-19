import { useRoutes } from "react-router-dom";


export default function Router() {
  return useRoutes([
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                element: (/* <AuthGuard><Login/></AuthGuard> */),
            },
            {
                path: 'register',
                element: (/* <AuthGuard><Register/></AuthGuard> */),
            }
        ]
    },
    {
        path: 'dashboard',
        element: /** <AuthGuard><DashboardLayout/></AuthGuard> */,
        children: [
            { path: 'integration', element:  /** <Integration> */ },
            {
                path: 'supports', 
                children: [
                    { path: 'pdf', element: /** <Pdf> */ },
                    { path: 'video', element: /** <Video> */}
                ]
            }
        ]
    }
  ])
}