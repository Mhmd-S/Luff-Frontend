import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { AuthProvider } from './contexts/useAuthContext';

// Pages
import ErrorPage from './pages/ErrorPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import Root from './pages/Root';
import ResetPasswordPage from './pages/ResetPasswordPage';
import RequestResetPasswordPage from './pages/RequestResetPasswordPage';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';
import Chat from './components/chat/Chat';
import { NotificationProvider } from './contexts/useNotificationContext';
import Matching from './components/matching/Matching';
import Landing from './pages/Landing';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Landing />,
	  errorElement: <ErrorPage />,
	},
	{
		path: '/app',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Matching />,
			},
			{
				path: 'settings',
				element: <Settings />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'profile',
				element: <Profile />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'chat',
				element: <Chat />,
				errorElement: <ErrorPage />,
			},
		],
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
		path: '/reset-password',
		element: <ResetPasswordPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/request-reset-password',
		element: <RequestResetPasswordPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<NotificationProvider>
			<RouterProvider router={router} />
		</NotificationProvider>
	</AuthProvider>
);
