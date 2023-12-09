import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useNotification } from '../contexts/useNotificationContext';

import MobileNavBar from '../components/common/MobileNavBar';
import DesktopUtilityBar from '../components/desktopUtilityBar/DesktopUtilityBar';
import ActiveChat from '../components/chat/ActiveChat';
import ChangeProfilePictures from '../components/settings/ChangeProfilePictures';

const Root = () => {
	// Utilized only during on desktop view
	const [recipient, setRecipient] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [showImagesEditor, setShowImagesEditor] = useState(false);
	//----------------------------
	const { notificationMessage } = useNotification();

	const renderContent = () => {
		if (showImagesEditor) {
			return (
				<ChangeProfilePictures
					handleGoBack={() => setShowImagesEditor(false)}
				/>
			);
		}

		if (chatId && recipient) {
			return (
				<ActiveChat
					setRecipient={setRecipient}
					setChatId={setChatId}
					chatId={chatId}
					recipient={recipient}
				/>
			);
		}

		return <Outlet />;
	};

	return (
		<div className="w-screen h-screen grid relative grid-cols-1 grid-rows-[92.5%_7.5%] md:grid-cols-[25%_75%] md:grid-rows-1">
			<DesktopUtilityBar
				setRecipient={setRecipient}
				setChatId={setChatId}
				setShowImagesEditor={setShowImagesEditor}
			/>

			<div className="w-full h-full md:bg-[#f0f2f4] md:flex md:justify-center md:py-2">
				{renderContent()}
			</div>

			<MobileNavBar />

			{/* Notification Message */}
			{notificationMessage && (
				<div className="absolute min-w-[40%] z-30 top-[7.5%] right-[5%] bg-green-500 p-4 rounded-lg text-white md:min-w-[25%] text-center">
					{notificationMessage}
				</div>
			)}
		</div>
	);
};

export default Root;
