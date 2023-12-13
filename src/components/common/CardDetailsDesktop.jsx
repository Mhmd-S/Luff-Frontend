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
				className={`w-full flex justify-between items-center p-4 border-b-2 border-[#3b93a1]`}
			>
				<p className={`text-4xl font-bold truncate`}>{userInfo.name}</p>
				<p className="text-4xl mx-3 font-semibold">
					{getAge(userInfo.dob)}
				</p>
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
			<p className={`p-3 mb-10 text-lg py-4 text-slate-900`}>
				{userInfo.bio}
			</p>
		</div>
	);
};

export default CardDetailsDesktop;
