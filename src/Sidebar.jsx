import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Sidebar() {
	const [isMinimized, setIsMinimized] = useState(true);
	const navigateTo = useNavigate();

	const closeSidebar = () => {
		setIsMinimized(true);
	};

	const pageNavigate = () => {
		setIsMinimized(true);
		navigateTo(`/#project-preview`);
	};

	return (
		<div>
			{isMinimized && (
				<div
					className="text-white absolute top-4 right-4"
					onClick={() => setIsMinimized(false)}
				>
					<GiHamburgerMenu />
				</div>
			)}
			{!isMinimized && (
				<div className="bg-white border-l border-black text-blue-900 absolute top-0 right-0 pr-4 h-full z-50">
					<div className="flex h-full">
						<div
							className="h-full flex align-middle items-center px-2 hover:cursor-pointer hover:bg-blue-200 hover:font-bold "
							onClick={closeSidebar}
						>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col h-full align-middle justify-center">
							<div
								className="border-b border-gray-400 pb-2 pr-2 mb-2"
								onClick={pageNavigate}
							>
								Home Page
							</div>
							<div
								className="border-b border-gray-400 pb-2 pr-2 mb-2"
								onClick={pageNavigate}
							>
								Project Previews
							</div>
							<div className="border-b border-gray-400 pb-2 pr-2 mb-2 flex align-middle items-center justify-between hover:underline">
								Projects <IoIosArrowDown />{' '}
							</div>
							<div
								className="border-b border-gray-300 pl-2 pb-2 pr-2 mb-2 flex align-middle items-center justify-between hover:underline"
								onClick={pageNavigate}
							>
								Project 1
							</div>
							<div
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								onClick={pageNavigate}
							>
								Project 2
							</div>
							<div
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								onClick={pageNavigate}
							>
								Project 3
							</div>
							<div
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								onClick={pageNavigate}
							>
								Project 4
							</div>
							<div
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								onClick={pageNavigate}
							>
								Project 5
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Sidebar;
