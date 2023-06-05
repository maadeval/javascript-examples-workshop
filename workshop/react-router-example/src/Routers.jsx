import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Page404 } from './components/404'
import { ContentPage } from './components/ContentPage'
import { FrontendError } from './components/FrontendError'
import { HomePage } from './components/HomePage'
import { RepositoryPage } from './components/RepositoryPage'
import { MainLayout } from './layouts/MainLayout'

export const Routers = () => <RouterProvider router={router} />

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/content',
        element: <ContentPage />,
      },
      {
        path: '/frontend-error',
        element: <FrontendError />,
      },
      {
        path: '/:organization/:name',
        element: <RepositoryPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
])
