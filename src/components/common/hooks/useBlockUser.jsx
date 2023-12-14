import React, { useState } from 'react';
import { userAPI } from '../../../api/userAPI';
import { useNotification } from '../../../contexts/useNotificationContext';

const useBlockUser = (blockUserId, reset) => {
	const [loading, setLoading] = useState(false);

	const { setNotification } = useNotification();

	const handleBlockUser = async () => {
		setLoading(true);
		const res = await userAPI.blockUser(blockUserId);

		if (res.data.status == 'success') {
			setNotification('User has been blocked');
			reset();
		} else {
			setNotification('Something went wrong. Try again later');
		}
		setLoading(false);
	};

	return {
		handleBlockUser,
		loading,
	};
};

export default useBlockUser;
