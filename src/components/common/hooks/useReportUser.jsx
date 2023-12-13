import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {userAPI} from '../../../api/userAPI';
import { useNotification } from '../../../contexts/useNotificationContext';

const useReportUser = (reportUserId) => {
	const [loading, isLoading] = useState(false);

	const{ setNotification } = useNotification();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleSubmitReport = async (data) => {
		isLoading(true);
		const res = await userAPI.reportUser(reportUserId, data.reason);

		if (res.data.status == 'success') {
			setNotification('User has been reported');
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

export default useReportUser;
