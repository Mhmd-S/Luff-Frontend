import InitialForm from '../common/InitialForm';
import FileUploadField from '../common/FileUploadField';
import FormButton2 from '../common/FormButton2';
import FormGeneralError from '../common/FormGeneralError';
import useProfilePicutreSettings from './hooks/useProfilePictureSettings';
import FileEditField from '../common/FileEditField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ChangeProfilePictures = ({ handleGoBack }) => {
	const {
		register,
		handleSubmit,
		onSubmit,
		handleDeleteImage,
		user,
		resetField,
		setError,
		generalError,
		loading,
		errors,
	} = useProfilePicutreSettings();

	return (
		<div className="w-screen h-full absolute bg-white top-0 md:relative">
			<InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading}>
				<div className="w-full flex items-center">
					<span
						className="pl-4 pr-9 hover:cursor-pointer"
						onClick={handleGoBack}
					>
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="w-7 h-7"
						/>
					</span>
					<h1 className="font-bold text-2xl w-fit">
						Edit Profile Pictures
					</h1>
				</div>

				<FormGeneralError error={generalError} />

				<div
					className={`w-full p-2 grid grid-cols-[25%_25%] grid-rows-3 justify-center items-center place-items-center gap-6 md:w-4/6 md:h-[70%] md:grid-cols-[20%_20%_20%] md:grid-rows-2`}
				>
					<FileEditField
						name="profilePicture1"
						register={register}
						errors={errors}
						resetField={resetField}
						setError={setError}
						usersPicture={user.profilePictures[0]}
					/>

					<FileEditField
						name="profilePicture2"
						register={register}
						errors={errors}
						resetField={resetField}
						setError={setError}
						usersPicture={user.profilePictures[1]}
					/>

					<FileEditField
						name="profilePicture3"
						register={register}
						errors={errors}
						resetField={resetField}
						setError={setError}
						usersPicture={user.profilePictures[2]}
					/>

					<FileUploadField
						name="profilePicture4"
						register={register}
						resetField={resetField}
						setError={setError}
						errors={errors}
						usersPicture={user.profilePictures[3]}
						handleDeleteImage={() => handleDeleteImage(3)}
					/>

					<FileUploadField
						name="profilePicture5"
						register={register}
						resetField={resetField}
						setError={setError}
						errors={errors}
						usersPicture={user.profilePictures[4]}
						handleDeleteImage={() => handleDeleteImage(4)}
					/>

					<FileUploadField
						name="profilePicture6"
						register={register}
						errors={errors}
						resetField={resetField}
						setError={setError}
						usersPicture={user.profilePictures[5]}
						handleDeleteImage={() => handleDeleteImage(5)}
					/>
				</div>

				<FormButton2 loading={loading} text="Save" />
			</InitialForm>
		</div>
	);
};

export default ChangeProfilePictures;
