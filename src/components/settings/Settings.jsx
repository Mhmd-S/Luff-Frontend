import FormButton from '../common/FormButton';
import SettingsMenu from './SettingsMenu';
import useSettings from './hooks/useSettings';
import ChangeProfilePictures from './ChangeProfilePictures';
import FormButton2 from '../common/FormButton2';
import ChangeBio from './ChangeBio';
import ChangeGender from './ChangeGender';
import ChangeOrientation from './ChangeOrientation';

const Settings = () => {
	const { settingsPage, handleClick, displaySettingsPage, handleLogout } =
		useSettings();

	return (
		<div className="w-full h-full flex flex-col py-4 relative">
			<h3 className=" w-fit ml-3 border-b-2 border-purple-500 font-bold text-3xl">
				Profile and Settings
			</h3>

			<ul
				className={`overflow-y-auto w-full h-full grid grid-cols-1 grid-rows-[repeat(4,40%)] place-items-center [&>*]:w-full ${
					settingsPage && 'hidden'
				}`}
			>
				<li className="w-full border-b-[1px]">
					<div className="w-full h-full p-4 flex flex-col justify-evenly">
						<p className="text-2xl w-full font-bold text-grey-900">
							Change Profile Picture
						</p>

						<p className="py-2">
							Modify your profile pictures, or add new ones.
						</p>
					</div>

					<div className="w-full h-fit flex justify-end py-2 px-4 ">
						<FormButton2
							onClick={() => handleClick('ChangeProfilePictures')}
							text="Modify Profile Pictures"
						/>
					</div>
				</li>

				<li>
					<ChangeBio />
				</li>

				<li>
					<ChangeGender />
				</li>

				<li>
					<ChangeOrientation />
				</li>

				<li className="border-[#fad5d5] ">
					<div className="w-full h-full p-4 flex flex-col justify-evenly">
						<p className="text-2xl w-full font-bold text-grey-900">
							Log out of account
						</p>

						<p className="py-2">
							Log out of account and be redirected to the login
							page.
						</p>
					</div>

					<div className="w-full h-fit flex justify-end py-2 px-4">
						<button
							onClick={handleLogout}
							className="w-fit h-fit text-sm py-2 px-3 bg-red-600 text-white rounded-lg"
						>
							Log Out
						</button>
					</div>
				</li>
			</ul>

			{displaySettingsPage()}
		</div>
	);
};

export default Settings;
