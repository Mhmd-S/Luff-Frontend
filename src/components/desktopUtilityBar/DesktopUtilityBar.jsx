import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../chat/Contacts';
import useDesktopUtilityBar from './hooks/useDesktopUtilityBar';
import SettingsDesktop from '../settings/SettingsDesktop';

const DesktopUtilityBar = ({
	setRecipient,
	setChatId,
	setShowImagesEditor,
}) => {
	const { user, showProfile, logout, handleClickShowProfile } =
		useDesktopUtilityBar();

	return (
		<div className="hidden w-full h-full md:grid md:grid-cols-1 md:grid-rows-[15%_85%]">
			<div className="w-full h-full bg-purple-500 grid grid-cols-[70%_30%] grid-rows-1 place-items-center">
				{!showProfile ? (
					<span
						className="max-w-10/12 w-3/4 h-fit bg-white text-slate-900 py-1 px-1 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-100"
						onClick={() => {
							handleClickShowProfile();
							setChatId(null);
							setRecipient(null);
						}}
					>
						<img
							src={user.profilePictures[0]}
							alt="logo"
							className="w-8 h-8 rounded-full"
						/>
						<span className="pl-2 truncate">{user.name}asdasd</span>
					</span>
				) : (
					<button
						className="w-fit h-fit bg-white text-slate-900 py-1 px-3 rounded-3xl flex items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-100"
						onClick={() => {
							handleClickShowProfile();
							setShowImagesEditor(false);
						}}
					>
						<img
							src="./logo1.png"
							alt="logo"
							className="h-8 rounded-full"
						/>
						<h1 className=" font-bold text-purple-500">LUFF</h1>
					</button>
				)}

				<button
					className="rounded-full h-fit w-fit bg-white px-2 py-1 transition-all duration-500 ease-in-out hover:bg-purple-100"
					onClick={logout}
				>
					<FontAwesomeIcon icon={faSignOut} />
				</button>
			</div>

			{showProfile ? (
				<SettingsDesktop setShowImagesEditor={setShowImagesEditor} />
			) : (
				<Contacts setRecipient={setRecipient} setChatId={setChatId} />
			)}
		</div>
	);
};

export default DesktopUtilityBar;
