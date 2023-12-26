import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-9xl text-red-500 mb-4"
      />
			<h1 className='font-bold text-xl mb-4'>Opps! Something went wrong.</h1>
			<h2 className='text-lg mb-4'>
				We are sorry, but we cannot find the page you are looking for.
			</h2>
			<button
				onClick={() => navigate('/login')}
				className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
			>
				Take me back
			</button>
		</div>
	);
};

export default ErrorPage;
