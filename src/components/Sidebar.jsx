import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Sidebar() {
	const [isMinimized, setIsMinimized] = useState(true);
	// const navigate = useNavigate();

	const closeSidebar = () => {
		setIsMinimized(true);
	};

	const pageNavigate = () => {
		setIsMinimized(true);
		// navigateTo(`/#project-preview`);
	};

	return (
		<div className="z-10 fixed top-0 right-0">
			{isMinimized && (
				<div className="text-white p-8" onClick={() => setIsMinimized(false)}>
					<GiHamburgerMenu />
				</div>
			)}
			{!isMinimized && (
				<div className="bg-white border-l border-black text-blue-900 h-screen pr-8 z-50">
					<div className="flex h-full">
						<div
							className="h-full flex align-middle items-center px-2 hover:cursor-pointer hover:bg-blue-200 hover:font-bold "
							onClick={closeSidebar}
						>
							<MdKeyboardArrowRight />
						</div>
						<div className="flex flex-col h-full align-middle justify-center">
							<a
								className="border-b border-gray-400 pb-2 pr-2 mb-2"
								onClick={closeSidebar}
								href="/"
							>
								Home Page
							</a>
							<a
								className="border-b border-gray-400 pb-2 pr-2 mb-2"
								onClick={pageNavigate}
								href="/project-preview"
							>
								Project Previews
							</a>
							<a className="border-b border-gray-400 pb-2 pr-2 mb-2 flex align-middle items-center justify-between hover:underline">
								Projects <IoIosArrowDown />{' '}
							</a>
							<a
								className="border-b border-gray-300 pl-2 pb-2 pr-2 mb-2 flex align-middle items-center justify-between hover:underline"
								href="#"
								onClick={pageNavigate}
							>
								Project 1
							</a>
							<a
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								href="#"
								onClick={pageNavigate}
							>
								Project 2
							</a>
							<a
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								href="#"
								onClick={pageNavigate}
							>
								Project 3
							</a>
							<a
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								href="#"
								onClick={pageNavigate}
							>
								Project 4
							</a>
							<a
								className="border-b border-gray-300 pl-2 pb-2 mb-2 flex align-middle items-center justify-between hover:underline"
								href="#"
								onClick={pageNavigate}
							>
								Project 5
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Sidebar;
