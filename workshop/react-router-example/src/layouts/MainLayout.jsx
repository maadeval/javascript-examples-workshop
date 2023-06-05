import { NavLink, Outlet } from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundery'

import style from './MainLayout.module.css'

export const MainLayout = () => {
  return (
    <main>
      <h1>React Router Dom Example</h1>
      <nav className={style.navbarContainer}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/content'}
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ''}`
          }
        >
          Content
        </NavLink>
        <NavLink
          to={'/xyz'}
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ''}`
          }
        >
          Unexisting page (404)
        </NavLink>
        <NavLink
          to={'/frontend-error'}
          className={({ isActive }) =>
            `${style.navItem} ${isActive ? style.active : ''}`
          }
        >
          Page with frontend error
        </NavLink>
      </nav>
      <main className={style.mainContent}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </main>
  )
}
