import React from 'react';
import useMobileNavBar from './hooks/useMobileNavBar';

const MobileNavBar = () => {
	const { renderNavItems } = useMobileNavBar();

	return (
		<ul className="w-full h-full sticky border-t-[1px] bottom-0 flex flex-row justify-evenly items-center md:hidden">
			<li className="hidden md:flex md:items-center md:justify-center">
				<img src="./logo1.png" alt="logo" className="w-1/2" />
			</li>

			{renderNavItems()}
		</ul>
	);
};

export default MobileNavBar;
