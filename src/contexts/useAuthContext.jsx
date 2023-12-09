import { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { userAPI } from '../api/userAPI';
import CheckCircle from '../components/icons/CheckCircle';
import { set } from 'react-hook-form';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authError, setAuthError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const getUserInfo = async () => {
		// If the user is authenticated gets his info
		try {
			setIsLoading(true);
			const isAuth = await userAPI.checkAuthStatus();
			if (isAuth.data.status == 'success') {
				const user = await userAPI.getSelf();
				setUser(user.data.data);
			}
		} catch (err) {
			console.log(err);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getUserInfo().finally(() => setIsLoading(false)); // Set loading to false when the request is done
	}, []);

	const logout = () => {
		setIsLoading(true);
		userAPI.logoutUser().then(() => setUser(null)).finally(() => setIsLoading(false));
	};

	const login = async (email, password) => {
		setAuthError('');
		setIsLoading(true);
		
		const response = await userAPI.loginUser(email, password);

		if (response.data.status === 'success') {
			setUser(response.data.user);
			setIsLoading(false);
			return true;
		} else {
			setAuthError(response.data.message);
		}
		setIsLoading(false);

	};

	const memoValue = useMemo(
		() => ({
			user,
			isLoading,
			authError,
			setIsLoading,
			getUserInfo,
			setUser,
			login,
			logout,
		}),
		[user, authError, isLoading]
	);

	if (isLoading) {
		return <CheckCircle />;
	}

	return (
		<AuthContext.Provider value={memoValue}>
			{children}
		</AuthContext.Provider>
	);
};

// Expor the hook instead of the context iteself
export const useAuth = () => {
	return useContext(AuthContext);
};
