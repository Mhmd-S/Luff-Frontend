import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNotification } from '../contexts/useNotificationContext';
import MobileNavBar from '../components/common/MobileNavBar';
import DesktopUtilityBar from '../components/desktopUtilityBar/DesktopUtilityBar';
import ActiveChat from '../components/chat/ActiveChat';
import ChangeProfilePictures from '../components/settings/ChangeProfilePictures';
import Guidelines from '../components/common/Guidelines';

const Root = () => {
	const [recipient, setRecipient] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [showImagesEditor, setShowImagesEditor] = useState(false);
	const [showGuidelines, setShowGuidelines] = useState(false);
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

	const renderNotificationMessage = () => {
		if (notificationMessage) {
			return (
				<div className="absolute min-w-[40%] z-30 top-[7.5%] right-[5%] bg-purple-100 border-purple-700 border-2 p-4 rounded-lg text-purple-700 md:min-w-[25%] text-center">
					{notificationMessage}
				</div>
			);
		}
	};

	const renderGuidelines = () => {
		if (showGuidelines) {
			return (
				<Guidelines
					showGuidelines={showGuidelines}
					setShowGuidelines={setShowGuidelines}
				/>
			);
		}
	};

	return (
		<div className="w-screen h-screen grid relative grid-cols-1 grid-rows-[92.5%_7.5%] md:grid-cols-[25%_75%] md:grid-rows-1">
			<DesktopUtilityBar
				chatId={chatId}
				setRecipient={setRecipient}
				setChatId={setChatId}
				setShowImagesEditor={setShowImagesEditor}
				setShowGuidelines={setShowGuidelines}
			/>

			<div className="w-full h-full md:bg-[#f0f2f4] md:flex md:justify-center">
				{renderContent()}
			</div>

			<MobileNavBar />

			{renderNotificationMessage()}

			{renderGuidelines()}
		</div>
	);
};

export default Root;
