import FormButton from '../common/FormButton2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Step3 = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center mb-24">
			<FontAwesomeIcon
				icon={faUserCheck}
				className="text-6xl text-my-orange border-4 border-my-orange rounded-full p-8 py-10 mb-2"
			/>
			<h2 className="pb-4 text-3xl font-semibold text-center text-purple-500 my-4">
				Onboarding Complete!
			</h2>
			<Link to="/app/home">
				<FormButton text="Go to Home" />
			</Link>
		</div>
	);
};

export default Step3;
