import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SettingsIcon from '../components/icons/SettingsIcon';
import HomeIcon from '../components/icons/HomeIcon';
import ChatIcon from '../components/chat/ChatIcon';
import { useNotification } from '../contexts/useNotificationContext';
import { useAuth } from '../contexts/useAuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopUtilityBar from '../components/desktopUtilityBar/DesktopUtilityBar';
import ActiveChat from '../components/chat/ActiveChat';
import ChangeProfilePictures from '../components/settings/ChangeProfilePictures';

const Root = () => {
	const navigate = useNavigate();

	// Utilized only during on desktop view
	const [recipient, setRecipient] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [showImagesEditor, setShowImagesEditor] = useState(false);
	//----------------------------
	
	const { notificationMessage } = useNotification();
	const { user } = useAuth();


	const renderContent = () => {
		if (showImagesEditor) {
			return <ChangeProfilePictures handleGoBack={()=>setShowImagesEditor(false)} />;
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
			<Outlet />
		);
	}

	useEffect(() => {
		if (!user) {
			navigate('/login');
			return;
		}

		if (user.onboardStep !== 2) {
			navigate('/onboarding');
			return;
		}
	}, [user]);

	return (
		<div className="w-screen h-screen grid relative grid-cols-1 grid-rows-[92.5%_7.5%] md:grid-cols-[25%_75%] md:grid-rows-1">
			{/* Desktop Utility Bar */}
			<DesktopUtilityBar
				setRecipient={setRecipient}
				setChatId={setChatId}
				setShowImagesEditor={setShowImagesEditor}
			/>

			<div className="w-full h-full md:bg-[#f0f2f4] md:flex md:justify-center md:py-2">
				{renderContent()}
			</div>

			{/* Mobile nav bar */}
			<ul className="w-full h-full sticky border-t-[1px] bottom-0 flex flex-row justify-evenly items-center md:hidden ">
				<li className="hidden md:flex md:items-center md:justify-center">
					<img src="./logo1.png" alt="logo" className="w-1/2" />
				</li>

				<li>
					<Link to="/home">
						<HomeIcon />
					</Link>
				</li>

				<li>
					<Link to="/chat">
						<ChatIcon />
					</Link>
				</li>

				<li>
					<Link to="/settings">
						<SettingsIcon />
					</Link>
				</li>

				<li>
					<Link to="/profile">
						<img
							src={user.profilePictures[0]}
							alt="logo"
							className="w-10 h-10 rounded-full border-[1px] border-my-orange"
						/>
					</Link>
				</li>
			</ul>

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
