import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../chat/Contacts';
import useDesktopUtilityBar from './hooks/useDesktopUtilityBar';
import SettingsDesktop from '../settings/SettingsDesktop';

const DesktopUtilityBar = ({
	setRecipient,
	setChatId,
	setShowImagesEditor,
	setShowGuidelines,
}) => {
	const { user, showProfile, handleLogout, handleClickShowProfile } =
		useDesktopUtilityBar();

	return (
		<div className="hidden w-full h-full md:grid grid-cols-1 grid-rows-[15%_85%]">
			<div className="w-full h-full bg-purple-500 grid grid-cols-[70%_15%_15%] grid-rows-1 place-items-center px-3">
				{!showProfile ? (
					<span
						className="max-w-10/12 w-4/5 h-fit bg-white text-slate-900 py-1 px-2 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-100"
						onClick={() => {
							handleClickShowProfile();
							setChatId(null);
							setRecipient(null);
						}}
					>
						<div className="w-12 h-10 rounded-full overflow-hidden border-2">
							<img
								src={user.profilePictures[0]}
								alt="logo"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<span className="pl-2 truncate text-[#014751] font-semibold">
							{user.name}
						</span>
					</span>
				) : (
					<button
						className="w-fit h-fit bg-white py-1 px-3 rounded-3xl flex items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-purple-100"
						onClick={() => {
							handleClickShowProfile();
							setShowImagesEditor(false);
						}}
					>
						<img
							src="./logo1.png"
							alt="logo"
							className="h-10 rounded-full"
						/>
						<h1 className="text-2xl font-bold text-purple-500">
							LUFF
						</h1>
					</button>
				)}

				<FontAwesomeIcon
					icon={faShieldAlt}
					className="rounded-full h-4 w-4 bg-white text-red-500 p-2 transition-all duration-500 ease-in-out hover:bg-purple-100 cursor-pointer"
					onClick={() => setShowGuidelines(true)}
				/>

				<FontAwesomeIcon
					icon={faSignOut}
					className="rounded-full h-4 w-4 bg-white text-red-500 p-2 transition-all duration-500 ease-in-out hover:bg-purple-100 cursor-pointer"
					onClick={handleLogout}
				/>
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
