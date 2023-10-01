import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthProvider } from './contexts/useAuthContext';

// Pages
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Root';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';

// Loaders


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  }
  // {
  //   path: '*', 
  //   element: <ErrorPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
