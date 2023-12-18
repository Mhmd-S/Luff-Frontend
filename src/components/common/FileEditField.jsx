import FormFieldError from './FormFieldError';
import AddIcon from '../icons/AddIcon';
import LoadingIcon from '../icons/LoadingIcon';
import useFileEditField from './hooks/useFileEditField';
import EditIcon from '../icons/EditIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const FileEditField = ({
	name,
	register,
	errors,
	setError,
	validationRules,
	usersPicture,
	resetField,
}) => {
	const { imageFile, isLoading, handleFileChange, handleEditImage } =
		useFileEditField({ name, setError, usersPicture, resetField });

	return (
		<div
			className={`h-full w-full relative flex justify-center items-center border-2 rounded-md bg-slate-100  ${
				errors[name] && 'border-2 border-pink-600'
			}`}
		>
			{isLoading && (
				<div className="w-full h-full flex justify-center items-center bg-slate-100 absolute">
					<LoadingIcon />
				</div>
			)}

			{/* The remove button for an image */}
			{imageFile && (
				<>
					<div className="absolute right-[-7%] top-[-5%] z-10">
						<div className="relative w-full h-full">
							<EditIcon onClick={handleEditImage} />
							<input
								type="file"
								name={name}
								accept="image/png, image/jpeg"
								{...register(name, validationRules)}
								onInput={handleFileChange}
								className={`opacity-0 w-full h-full absolute top-0 r-0`}
							/>
						</div>
					</div>
					<img
						className="w-full h-full object-cover relative rounded-md"
						src={
							typeof imageFile == 'string'
								? imageFile
								: URL.createObjectURL(imageFile)
						}
						alt="Preview"
					/>
				</>
			)}

			{!imageFile && (
				<input
					type="file"
					name={name}
					accept="image/png, image/jpeg"
					{...register(name, validationRules)}
					onInput={handleFileChange}
					className={`opacity-0 absolute w-full h-full`}
				/>
			)}
		</div>
	);
};

export default FileEditField;
