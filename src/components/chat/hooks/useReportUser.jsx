import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const useReportUser = (handleReportUser) => {
	const [loading, isLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleSubmitReport = async (data) => {
		isLoading(true);
		handleReportUser(data.reason);
		isLoading(false);
	};

	return {
		register,
		handleSubmit,
        handleSubmitReport,
		errors,
		handleReportUser,
	};
};

export default useReportUser;
