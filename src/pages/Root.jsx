import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useNotification } from '../contexts/useNotificationContext';

import MobileNavBar from '../components/common/MobileNavBar';
import DesktopUtilityBar from '../components/desktopUtilityBar/DesktopUtilityBar';
import ActiveChat from '../components/chat/ActiveChat';
import ChangeProfilePictures from '../components/settings/ChangeProfilePictures';
import SmallModal from '../components/common/SmallModal';

const Root = () => {
	// Utilized only during on desktop view
	const [recipient, setRecipient] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [showImagesEditor, setShowImagesEditor] = useState(false);
	const [showGuidelines, setShowGuidelines] = useState(false);
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
				setShowGuidelines={setShowGuidelines}
			/>

			<div className="w-full h-full md:bg-[#f0f2f4] md:flex md:justify-center md:py-2">
				{renderContent()}
			</div>

			<MobileNavBar />

			{/* Notification Message */}
			{notificationMessage && (
				<div className="absolute min-w-[40%] z-30 top-[7.5%] right-[5%] bg-purple-100 border-purple-700 border-2 p-4 rounded-lg text-purple-700 md:min-w-[25%] text-center">
					{notificationMessage}
				</div>
			)}

			<SmallModal
				showModal={showGuidelines}
				setShowModal={setShowGuidelines}
			>
				<div className="w-full h-full flex flex-col justify-center items-center">
					<h1 className="text-2xl font-semibold mb-4">
						Community Guidelines
					</h1>
					<p className="text-lg text-gray-600">
						These are the guidelines that all users must follow.
						Failure to do so will result in a ban.
					</p>
					<p className="text-lg text-gray-600">1. No spamming</p>
					<p className="text-lg text-gray-600">3. No NSFW content</p>
					<p className="text-lg text-gray-600">
						4. No illegal content
					</p>
					<p className="text-lg text-gray-600">5. No harassment</p>
					<p className="text-lg text-gray-600">6. No impersonation</p>
					<p>
						Remember we have your TP number and we will hunt you if
						you break these rules.
					</p>
				</div>
			</SmallModal>
		</div>
	);
};

export default Root;
