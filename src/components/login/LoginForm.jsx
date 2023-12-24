import FormField from '../common/FormField';
import FormButton from '../common/FormButton';
import FormGeneralError from '../common/FormGeneralError';
import useLogin from './hooks/useLogin';
import InitialForm from '../common/InitialForm';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	const { register, handleSubmit, onSubmit, authError, loading, errors } =
		useLogin();
	return (
		<div className="w-full h-5/6 flex flex-col bg-white border-[1.5px] border-[#F76301] p-6 rounded-lg shadow-lg md:w-3/5 md:h-[95%]">
			<h3 className="w-full text-center text-xl">
				Please enter your{' '}
				<span className="text-purple-900 font-bold">TP Email</span> and{' '}
				<span className="text-purple-900 font-bold">Password</span> to
				log in.
			</h3>

			<InitialForm onSubmit={handleSubmit(onSubmit)}>
				{authError && <FormGeneralError message={authError} />}

				<FormField
					name="email"
					type="email"
					register={register}
					errors={errors}
					placeholder="Email"
					validationRules={{
						required: 'TP email is required',
						pattern: {
							value: /^(TP\d{6}@mail\.apu\.edu\.my|\d{7}@sd\.taylors\.edu\.my|d{8}@imail\.sunway\.apu\.edu\.my)$/,
							message: 'Invalid student email',
						},
					}}
				/>

				<FormField
					name="password"
					type="password"
					register={register}
					placeholder={'Password'}
					errors={errors}
					validationRules={{
						required: 'Password is required',
					}}
				/>

				<FormButton text="Log In" loading={loading} />
			</InitialForm>

			<div className="w-full text-center pt-2 flex flex-col">
				<span>Forgot your password? </span>
				<Link
					to="/request-reset-password"
					className="text-center text-[#F76301] hover:underline"
				>
					Reset password
				</Link>
			</div>

			<div className="w-full text-center pt-2 flex flex-col">
				<span>Don't have an account? </span>
				<Link
					to="/registration"
					className="text-center text-[#F76301] hover:underline"
				>
					Register
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
