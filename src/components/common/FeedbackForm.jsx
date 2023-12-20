import React from 'react';
import Modal from './Modal';
import InitialForm from './InitialForm';
import FormFieldTextArea from './FormFieldTextArea';
import useFeedbackForm from './hooks/useFeedbackForm';

const FeedbackForm = ({ showModal, setShowModal }) => {
	
	const { register, handleSubmit, errors, loading, handleSubmitReport } =
		useFeedbackForm();

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h3 className="text-center text-lg font-semibold text-[#023c64] pt-2">
				We are really excited to hear from you!
			</h3>
			<p className="text-center text-sm font-semibold text-[#023c64] mt-1 px-2">
				Please let us know how we can improve our app. We are always
				looking for ways to make your experience better.
			</p>
			<InitialForm
				onSubmit={handleSubmit(handleSubmitReport)}
				loading={loading}
			>
				<FormFieldTextArea
					label="feedback"
					name="feedback"
					id="feedback"
					placeholder="Enter your feedback here"
					register={register}
					errors={errors}
					validationRules={{
						required: 'Please enter your feedback',
						minLength: {
							value: 25,
							message: 'Feedback must be at least 25 characters',
						},
						maxLength: {
							value: 250,
							message: 'Feedback must be less than 259 characters',
						},
					}}
				/>
				<div className="flex justify-evenly items-center w-full pb-2">
					<button
						className="w-1/5 bg-[#023c64] text-white rounded-md p-1"
						type="submit"
					>
						Yes
					</button>
					<button
						className="w-1/5 border-[#023c64] border-2 text-[#023c64] rounded-md p-1"
						onClick={() => setShowModal(false)}
					>
						No
					</button>
				</div>
			</InitialForm>
		</Modal>
	);
};

export default FeedbackForm;
