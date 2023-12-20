import ChangeBio from './ChangeBio';
import ChangeGender from './ChangeGender';
import ChangeOrientation from './ChangeOrientation';
import FormButton2 from '../common/FormButton2';
import { useAuth } from '../../contexts/useAuthContext';

const SettingsDesktop = ({ setShowImagesEditor }) => {
	const { user } = useAuth();

	return (
		<div className="w-full h-full flex flex-col py-2 ">
			<h3 className=" w-fit ml-3 border-b-2 border-purple-500 font-bold text-xl">
				Profile and Settings
			</h3>
			<ul
				className={`overflow-y-auto w-full h-full grid grid-cols-1 grid-rows-[repeat(4,50%)] place-items-center [&>*]:w-full`}
			>
				<li className="w-full border-b-[1px]">
					<div className="w-full h-full p-4 flex flex-col justify-evenly">
						<p className="text-xl w-full font-bold text-grey-900">
							Change Profile Picture
						</p>

						<p className="py-2">
							Modify your profile pictures, or add new ones.
						</p>
					</div>

					<div className="w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4  border-t-[1px]  md:bg-transparent md:border-t-0 md:border-b-2">
						<FormButton2
							text="Modify Profile Pictures"
							onClick={() => setShowImagesEditor(true)}
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
			</ul>
		</div>
	);
};

export default SettingsDesktop;
