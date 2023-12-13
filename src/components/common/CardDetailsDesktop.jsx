import InfoIcon from '../icons/InfoIcon';
import useCardDetails from './hooks/useCardDetails';
import ArrowUp from '../icons/ArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faFlag } from '@fortawesome/free-solid-svg-icons';

const CardDetailsDesktop = ({ userInfo }) => {
	const { openCard, handleOpenCard, handleCloseCard, getAge } =
		useCardDetails();

	return (
		<div
			className={`w-full h-full flex flex-col text-[#3b93a1] bg-white rounded-r-xl`}
		>
			<div
				className={`w-full flex justify-between items-center p-4 border-b-2 border-[#3b93a1]`}
			>
				<p className={`text-4xl font-bold truncate`}>{userInfo.name}</p>
				<p className="text-4xl mx-3 font-semibold">
					{getAge(userInfo.dob)}
				</p>
				<FontAwesomeIcon
					icon={faEllipsisV}
					className="w-4 h-4 border-slate-900 text-slate-900 rounded-full cursor-pointer"
				/>
			</div>
			<p className={`p-3 mb-10 text-lg py-4 text-slate-900`}>
				{userInfo.bio}
			</p>
		</div>
	);
};

export default CardDetailsDesktop;
