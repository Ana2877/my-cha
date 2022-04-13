import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import NotFound from './pages/Page404';
import Introduction from './pages/Introduction';
import SearchTea from './pages/SearchTea';
import PreparingTea from './pages/PreparingTea';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'introducao', element: <Introduction /> },
        { path: 'escolhendo-cha', element: <SearchTea /> },
        { path: 'fazendo-cha', element: <PreparingTea /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/introducao" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
