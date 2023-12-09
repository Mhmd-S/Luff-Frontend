import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const { user, login, authError, getUserInfo, isLoading } = useAuth();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/home');
		}
	}, [user]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await loginUser(data.email, data.password);
	};

	const loginUser = async (email, password) => {
		await login(email, password);
		await getUserInfo();
	};

	return {
		user,
		register,
		handleSubmit,
		onSubmit,
		loading: isLoading,
		authError,
		errors,
	};
};

export default useLogin;
