import './styles/global.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import { AuthProvider } from './authentication/useAuth';

// Pages
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Root';
import RegistrationPage from './pages/RegistrationPage';

// Components

// Loaders


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      // {
      //   path: 'home',
      //   element: <Home />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: 'search',
      //   element: <Search />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: 'explore',
      //   element: <Explore />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: 'chat',
      //   element: <Chat />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: 'profile/:username',
      //   element: <Profile />,
      //   errorElement: <ErrorPage />,
      //   loader:  userLoader,
      // }
    ]
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: '/registration',
    element: <RegistrationPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: '*', 
  //   element: <ErrorPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
);
