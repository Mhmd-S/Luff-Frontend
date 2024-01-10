import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../chat/Contacts';
import useDesktopUtilityBar from './hooks/useDesktopUtilityBar';
import SettingsDesktop from '../settings/SettingsDesktop';

const DesktopUtilityBar = ({
	chatId,
	setRecipient,
	setChatId,
	setShowImagesEditor,
	setShowGuidelines,
}) => {
	const { user, showProfile, handleLogout, handleClickShowProfile } =
		useDesktopUtilityBar();

	return (
		<div className="hidden w-full h-full md:grid grid-cols-1 grid-rows-[15%_85%] border-r-[1px] border-r-gray-200">
			<div className="w-full h-full 0  grid grid-cols-[55%_22.5%_22.5%] grid-rows-1 place-items-center px-3">
				{!showProfile ? (
					<span
						className="max-w-10/12 min-w-fit h-fit bg-purple-100 text-slate-900 py-1 px-4 rounded-3xl grid grid-rows-1 grid-cols-[25%_75%] place-items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-300"
						onClick={() => {
							handleClickShowProfile();
							setChatId(null);
							setRecipient(null);
						}}
					>
						<div className="w-11 h-11 rounded-full overflow-hidden border-2">
							<img
								src={user.profilePictures[0]}
								alt="logo"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="max-w-full pl-2 truncate text-[#014751] font-semibold">
							<span>{user.name}</span>
						</div>
					</span>
				) : (
					<button
						className="w-fit h-fit bg-purple-100 py-2 px-3 rounded-3xl flex items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-300"
						onClick={() => {
							handleClickShowProfile();
							setShowImagesEditor(false);
						}}
					>
						<img
							src="/logo1.png"
							alt="logo"
							className="h-8 p-1 rounded-full"
						/>
						<h1 className="text-xl font-bold text-purple-500">
							UniLuff
						</h1>
					</button>
				)}

				<FontAwesomeIcon
					icon={faShieldAlt}
					className="rounded-full h-5 w-5 bg-purple-100 text-red-500 p-4 ml-1 transition-all duration-500 ease-in-out hover:bg-purple-300 cursor-pointer"
					onClick={() => setShowGuidelines(true)}
				/>

				<FontAwesomeIcon
					icon={faSignOut}
					className="rounded-full h-5 w-5 bg-purple-100 text-red-500 p-4 transition-all duration-500 ease-in-out hover:bg-purple-300 cursor-pointer"
					onClick={handleLogout}
				/>
			</div>

			{showProfile ? (
				<SettingsDesktop setShowImagesEditor={setShowImagesEditor} />
			) : (
				<Contacts
					setRecipient={setRecipient}
					setChatId={setChatId}
					chatId={chatId}
				/>
			)}
		</div>
	);
};

export default DesktopUtilityBar;
