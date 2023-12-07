import { useEffect, useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../contexts/useAuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const [generalError, setGeneralError] = useState('');
	const { user, setUser } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/home');
			return;
		}
	}, [user]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const login = async (email, password) => {
		setLoading(true);
		const response = await userAPI.loginUser(email, password);
		setLoading(false);

		if (response.data.status === 'success') {
			setUser(response.data.user);
			navigate('/home');
		} else {
			setGeneralError(response.data.message);
		}
	};

	const onSubmit = (data) => {
		login(data.email, data.password);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		loading,
		generalError,
		errors,
	};
};

export default useLogin;
