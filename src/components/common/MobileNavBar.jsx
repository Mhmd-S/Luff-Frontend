import React from 'react';
import useMobileNavBar from './hooks/useMobileNavBar';

const MobileNavBar = () => {
	const { renderNavItems } = useMobileNavBar();

	return (
		<ul className="w-full h-full sticky border-t-[1px] bottom-0 flex flex-row justify-evenly items-center py-1 md:hidden">
			{renderNavItems()}
		</ul>
	);
};

export default MobileNavBar;
