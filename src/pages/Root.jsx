import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/useNotificationContext';
import { useAuth } from '../contexts/useAuthContext';
import MobileNavBar from '../components/common/MobileNavBar';
import DesktopUtilityBar from '../components/desktopUtilityBar/DesktopUtilityBar';
import ActiveChat from '../components/chat/ActiveChat';
import ChangeProfilePictures from '../components/settings/ChangeProfilePictures';
import Guidelines from '../components/common/Guidelines';
import FeedBackForm from '../components/common/FeedbackForm';

const Root = () => {
	const naviagte = useNavigate();

	const [recipient, setRecipient] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [showImagesEditor, setShowImagesEditor] = useState(false);
	const [showGuidelines, setShowGuidelines] = useState(false);
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);
	const [ isLoading, setIsLoading ] = useState(true);
	const { notificationMessage } = useNotification();

	const { user, loading } = useAuth();

	useEffect(() => {
		if (!loading && !user) {
			naviagte('/login');
		}
		if (!loading && user && user.onboardStep == 0) {
			naviagte('/onboarding');
		}
		setIsLoading(false);
	}, [user, loading]);

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

		return (
			<Outlet
				context={{ majorModalOpen: showGuidelines || showFeedbackForm }}
			/>
		);
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
		<div className="w-screen h-screen overflow-hidden grid relative grid-cols-1 grid-rows-[92.5%_7.5%] md:grid-cols-[25%_75%] md:grid-rows-1">
			{loading || isLoading ? (
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-20 h-20 border-4 border-gray-300 rounded-full animate-spin"></div>
				</div>
			) : (
				<>
					<DesktopUtilityBar
						chatId={chatId}
						setRecipient={setRecipient}
						setChatId={setChatId}
						setShowImagesEditor={setShowImagesEditor}
						setShowGuidelines={setShowGuidelines}
					/>

					<div className="w-full h-full md:bg-[#FEFEFE] md:flex md:justify-center">
						{renderContent()}
					</div>

					<MobileNavBar />

					<button
						className="hidden absolute translate-x-[25%] select-none translate-y-[25%] rotate-90 text-sm top-1/2 right-0 bg-gray-200 p-2 rounded-b-lg md:block transition-all ease-in-out hover:bg-gray-300 hover:px-3"
						onClick={() => setShowFeedbackForm(true)}
					>
						Feedback
					</button>

					{renderNotificationMessage()}
					{showFeedbackForm && (
						<FeedBackForm setShowModal={setShowFeedbackForm} />
					)}
					{renderGuidelines()}
				</>
			)}
		</div>
	);
};

export default Root;
