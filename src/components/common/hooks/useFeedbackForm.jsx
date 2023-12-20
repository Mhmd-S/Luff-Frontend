import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userAPI } from '../../../api/userAPI';
import { useNotification } from '../../../contexts/useNotificationContext';

const useFeedbackForm = () => {
	const [loading, isLoading] = useState(false);

	const { setNotification } = useNotification();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleSubmitReport = async (data) => {
		isLoading(true);
		const res = await userAPI.sendFeedback(data.feedback);

		if (res.data.status == 'success') {
			setNotification('Feedback Recieved. Thank you!');
		} else {
			setNotification('Something went wrong. Try again later');
		}
		isLoading(false);
	};

	return {
		register,
		handleSubmit,
		handleSubmitReport,
		errors,
		loading,
	};
};

export default useFeedbackForm;
