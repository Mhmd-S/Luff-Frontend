import useCardDetails from './hooks/useCardDetails';
import MiniMenu from './MiniMenu';

const CardDetailsDesktop = ({
	userInfo,
	showMiniMenu,
	setShowMiniMenu,
	setShowSmallModal,
}) => {
	const { getAge } = useCardDetails();

	return (
		<div
			className={`w-full h-full flex flex-col text-[#3b93a1] bg-white rounded-r-xl`}
		>
			<div
				className={`w-full flex items-center justify-evenly p-4 border-b-2 border-[#3b93a1]`}
			>
				<div className="w-3/4 h-full flex justify-between items-center">
					<p className={`text-2xl w-4/5 font-bold truncate`}>
						{userInfo.name}
					</p>
					<p className="text-2xl mx-3 font-semibold">
						{getAge(userInfo.dob)}
					</p>
				</div>
				<MiniMenu
					showMiniMenu={showMiniMenu}
					setShowMiniMenu={setShowMiniMenu}
					menuItems={[
						{
							text: 'Report User',
							onClick: () => setShowSmallModal(1),
						},
						{
							text: 'Block User',
							onClick: () => setShowSmallModal(2),
						},
					]}
				/>
			</div>
			<p className={`mb-10 text-md py-4 px-6 font-semibold text-slate-900`}>
				{userInfo.bio}
			</p>
		</div>
	);
};

export default CardDetailsDesktop;
