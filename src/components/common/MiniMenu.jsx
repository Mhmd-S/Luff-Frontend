import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import useMiniMenu from './hooks/useMiniMenu';

const MiniMenu = ({ showMiniMenu, setShowMiniMenu, menuItems }) => {
	const { miniMenuRef } = useMiniMenu(setShowMiniMenu);

	return (
		<div className="relative" ref={miniMenuRef}>
			<FontAwesomeIcon
				icon={faEllipsisVertical}
				className={`text-2xl text-slate-900 ${
					showMiniMenu && 'bg-[rgba(0,0,0,0.07)]'
				} px-3 py-1 rounded-full -1 cursor-pointer`}
				onClick={() => setShowMiniMenu(!showMiniMenu)}
			/>
			<ul
				className={`absolute w-max flex flex-col bg-white border-[2px] rounded-md py-3 [&>*]:p-3 transition-all duration-300 cursor-pointer ${
					showMiniMenu
						? 'opacity-100 scale-y-100 top-10 right-0'
						: 'opacity-0 scale-y-0 top-[-20%] right-[-20%]'
				}`}
			>
				{menuItems.map((item, index) => {
					return (
						<li key={index} onClick={item.onClick} className="text-sm text-slate-900 hover:bg-[rgb(0,0,0,.05)]">
							{item.text}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MiniMenu;
