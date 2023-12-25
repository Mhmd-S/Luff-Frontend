import FormButton from '../common/FormButton2';
import { Link } from 'react-router-dom';

const Step3 = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<img src="./1F386.svg" className="w-3/5 md:w-1/6" />
			<h2 className="pb-4 text-3xl font-semibold text-center text-purple-500">
				Onboarding Complete!
			</h2>
			<Link to="/home">
        <FormButton text="Go to Home" />
      </Link>
		</div>
	);
};

export default Step3;
