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

	return (
		<div className="flex relative h-100 mx-auto items-center justify-center">
			<div className="absolute z-10 left-0 h-screen flex items-center group hover:bg-white hover:bg-opacity-30 px-2">
				<MdKeyboardArrowLeft
					size={32}
					className="self-center text-gray-600 group-hover:text-white"
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
			<h2 className="absolute top-4 z-20 text-white text-3xl font-bold">
				{tempFiles[currentProjectId].name}
			</h2>
			{/* </div> */}
			<div className="flex absolute bottom-8 z-20">
				{tempFiles.map((file, i) => {
					return (
						<div key={i}>
							<div>
								<GoDotFill color="white" />
							</div>
						</div>
					);
				})}
			</div>
			<div className="absolute z-10 right-0 h-screen flex items-center group hover:bg-white hover:bg-opacity-30 px-2">
				<MdKeyboardArrowRight
					className="self-center text-gray-600 group-hover:text-white"
					size={32}
				/>
			</div>
		</div>
	);
}

export default ProjectCarousel;
