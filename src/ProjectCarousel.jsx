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
	const [isPaused, setIsPaused] = useState(false);
	const [startingX, setStartingX] = useState(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (isPaused) {
				setIsPaused((prev) => {
					return false;
				});
			}
			!isPaused &&
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
	}, [isPaused]);

	const prevProject = () => {
		if (currentProjectId == 0) {
			setCurrentProjectId(tempFiles.length - 1);
		} else {
			setCurrentProjectId(currentProjectId - 1);
		}
		setIsPaused(true);
	};

	const nextProject = () => {
		if (currentProjectId == tempFiles.length - 1) {
			setCurrentProjectId(0);
		} else {
			setCurrentProjectId(currentProjectId + 1);
		}
		setIsPaused(true);
	};

	const start = (e) => {
		setStartingX(e.changedTouches[0].clientX);
	};
	const move = (e) => {
		if (startingX && startingX > e.changedTouches[0].clientX + 25) {
			nextProject();
		} else if (startingX && startingX < e.changedTouches[0].clientX - 25) {
			prevProject();
		}
		setStartingX(null);
	};

	return (
		<div className="flex relative h-100 mx-auto items-center justify-center">
			<div
				onClick={prevProject}
				className="absolute z-10 left-0 h-screen flex items-center group hover:bg-white hover:bg-opacity-30 px-2 active:bg-gray-400 active:bg-opacity-30 invisible md:visible lg:visible"
			>
				<MdKeyboardArrowLeft
					size={32}
					className="self-center text-gray-600 group-hover:text-white group-active:text-gray-900"
				/>
			</div>

			<div
				draggable="true"
				onTouchStart={start}
				onTouchEnd={move}
				className="h-100 mx-auto touch-auto"
			>
				<img
					className="object-fill"
					src={tempFiles[currentProjectId].imgUrl}
					alt={`${tempFiles[currentProjectId].name} image`}
					className="z-10"
				/>
			</div>
			{/* <div className=""> */}
			<h2 className="absolute top-8 z-20 text-white text-3xl font-bold text-shadow-lg">
				Project Highlights
			</h2>
			<h3 className="absolute top-20 z-20 text-white text-2xl font-bold text-shadow-lg">
				{tempFiles[currentProjectId].name}
			</h3>
			<h3 className="absolute bottom-16 z-20 text-white text-xl font-bold text-shadow-lg border-2 rounded-lg bg-white bg-opacity-30 px-3 py-2 cursor-pointer hover:underline active:bg-opacity-40">
				View Project
			</h3>
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
				className="absolute z-10 right-0 h-screen flex items-center px-2 group hover:bg-white hover:bg-opacity-30 hover:cursor-pointer active:bg-gray-400 active:bg-opacity-30 invisible md:visible lg:visible"
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
