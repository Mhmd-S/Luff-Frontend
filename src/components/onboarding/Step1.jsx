import InitialForm from '../common/InitialForm';
import FormField from '../common/FormField';
import useStep1 from './hooks/useStep1';
import FormButton from '../common/FormButton';
import FormFieldTextArea from '../common/FormFieldTextArea';
import FormGeneralError from '../common/FormGeneralError';
import RadioGroup from '../common/RadioGroup';

const Step1 = ({ nextStep }) => {
	const { register, handleSubmit, onSubmit, loading, errors, generalError } =
		useStep1(nextStep);

	const genderOptions = [
		{ value: '1', label: 'Male' },
		{ value: '2', label: 'Female' },
	];

	const viewOptions = [
		{ value: '1', label: 'Men' },
		{ value: '2', label: 'Women' },
	];

	return (
		<div className="w-full h-fit grid grid-cols-1 grid-rows-[12.5%_87.5%] bg-white border-[1.5px] border-[#F76301] p-4 rounded-lg shadow-lg md:w-2/6 ">
			<div className="w-full mb-2 text-center text-xl border-b-[1.5px] border-my-orange">
				<p>
					Complete your <span className="text-purple-700 font-bold">profile.</span>
				</p>
				<p>
					Tell us about yourself.
				</p>
			</div>

			<InitialForm onSubmit={handleSubmit(onSubmit)} loading={loading}>
				<FormGeneralError message={generalError} />

				<FormField
					label="Name"
					name="name"
					type="text"
					placeholder="ex. John"
					register={register}
					errors={errors}
					validationRules={{
						required: 'Name is required',
						pattern: {
							value: /^[a-zA-Z]{1,24} [a-zA-Z]{0,15}$/,
							message:
								'Name must only contain letters, a space, and must be less than 24 characters long',
						},
						maxLength: {
							value: 24,
							message: 'Name must be less than 40 characters long',
						},
					}}
				/>

				<FormField
					label="Date of Birth (Can not be changed later)"
					name="dob"
					type="date"
					register={register}
					errors={errors}
					validationRules={{
						required: 'Date is required',
						min: {
							value: '1920-01-01',
							message: 'Date of Birth must be after 1970-01-01',
						},
						max: {
							value: '2023-01-01',
							message: 'Date of Birth must be before 2023-01-01',
						},
					}}
				/>

				<FormFieldTextArea
					label="Bio"
					name="bio"
					placeholder="Tell us about yourself"
					register={register}
					errors={errors}
					validationRules={{
						required: 'Bio is required',
						minLength: {
							value: 25,
							message: 'Bio must be at least 25 characters long',
						},
						maxLength: {
							value: 250,
							message:
								'Bio must be less than 250 characters long',
						},
					}}
				/>

				<RadioGroup
					label="Your gender"
					name="gender"
					errors={errors}
					register={register}
					validationRules={{
						required: 'Gender is required',
					}}
					options={genderOptions}
				/>

				<RadioGroup
					label="Looking for"
					name="orientation"
					errors={errors}
					register={register}
					validationRules={{
						required: 'Orientation is required',
					}}
					options={viewOptions}
				/>

				<FormButton text="Next Step" />
			</InitialForm>
		</div>
	);
};

export default Step1;
