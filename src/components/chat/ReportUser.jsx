import React from 'react';
import SmallModal from '../common/SmallModal';
import useReportUser from './hooks/useReportUser';
import FormFieldTextArea from '../common/FormFieldTextArea';
import InitialForm from '../common/InitialForm';
import FormButton from '../common/FormButton';

const ReportUser = ({ setShowSmallModal, handleReportUser }) => {
	const { register, handleSubmit, errors, loading, handleSubmitReport } =
		useReportUser(handleReportUser);

	return (
		<SmallModal setShowModal={setShowSmallModal}>
			<h3 className="text-center text-xl font-semibold text-[#023c64]">
				Report User
			</h3>
			<p className="text-center text-sm font-semibold text-[#023c64] mt-2">
				Reporting this user will block them from contacting you and will alert the admin to review this user.
				The admin may view your chat history with this user.
			</p>
			<InitialForm
				onSubmit={handleSubmit(handleSubmitReport)}
				loading={loading}
			>
				<FormFieldTextArea
					label="Reason"
					name="reason"
					id="reason"
					placeholder="Enter a reason for reporting this user"
					register={register}
					errors={errors}
					validationRules={{
						required: 'Please enter a reason',
						minLength: {
							value: 25,
							message: 'Reason must be at least 10 characters',
						},
						maxLength: {
							value: 250,
							message: 'Reason must be less than 100 characters',
						},
					}}
				/>
				<div className="flex justify-evenly items-center w-full">
					<button
						className="w-1/4 bg-[#023c64] text-white rounded-md p-2"
						type="submit"
					>
						Yes
					</button>
					<button
						className="w-1/4 border-[#023c64] border-2 text-[#023c64] rounded-md p-2"
						onClick={() => setShowSmallModal(false)}
					>
						No
					</button>
				</div>
			</InitialForm>
		</SmallModal>
	);
};

export default ReportUser;
