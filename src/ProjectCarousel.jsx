import React, { useState, useEffect } from 'react';

import { GoDotFill } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const tempFiles = [
	{
		name: 'Project 1',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
	{
		name: 'Project 2',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
	{
		name: 'Project 3',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
	{
		name: 'Project 4',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
	{
		name: 'Project 5',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
];

function ProjectCarousel() {
	const [currentProjectId, setCurrentProjectId] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentProjectId((prevId) => {
				if (prevId === tempFiles.length - 1) {
					return 0; // Reset to the first project
				} else {
					return prevId + 1; // Move to the next project
				}
			});
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const prevProject = () => {
		if (currentProjectId == 0) {
			setCurrentProjectId(tempFiles.length - 1);
		} else {
			setCurrentProjectId(currentProjectId - 1);
		}
	};

	const nextProject = () => {
		if (currentProjectId == tempFiles.length - 1) {
			setCurrentProjectId(0);
		} else {
			setCurrentProjectId(currentProjectId + 1);
		}
	};

	return (
		<div className="flex relative h-100 mx-auto items-center justify-center">
			<div
				onClick={prevProject}
				className="absolute z-10 left-0 h-screen flex items-center group hover:bg-white hover:bg-opacity-30 px-2 active:bg-gray-400 active:bg-opacity-30"
			>
				<MdKeyboardArrowLeft
					size={32}
					className="self-center text-gray-600 group-hover:text-white group-active:text-gray-900"
				/>
			</div>

			<div className="h-100 mx-auto">
				<img
					className="object-fill"
					src={tempFiles[currentProjectId].imgUrl}
					alt={`${tempFiles[currentProjectId].name} image`}
					className="z-10"
				/>
			</div>
			{/* <div className=""> */}
			<h2 className="absolute top-8 z-20 text-white text-3xl font-bold text-shadow-lg">
				{tempFiles[currentProjectId].name}
			</h2>
			{/* </div> */}
			<div className="flex absolute bottom-8 z-20">
				{tempFiles.map((file, i) => {
					return (
						<div key={i}>
							<div>
								<GoDotFill color={i == currentProjectId ? 'white' : 'grey'} />
							</div>
						</div>
					);
				})}
			</div>
			<div
				onClick={nextProject}
				className="absolute z-10 right-0 h-screen flex items-center px-2 group hover:bg-white hover:bg-opacity-30 hover:cursor-pointer active:bg-gray-400 active:bg-opacity-30"
			>
				<MdKeyboardArrowRight
					className="self-center text-gray-600 group-hover:text-white group-active:text-gray-900"
					size={32}
				/>
			</div>
		</div>
	);
}

export default ProjectCarousel;
