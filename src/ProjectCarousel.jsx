import React, { useState, useEffect } from 'react';

import { GoDotFill } from 'react-icons/go';

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
		<div className="w-100 h-100 relative">
			<h2 className="absolute text-white text-3xl font-bold top-4 left-1/2">
				{tempFiles[currentProjectId].name}
			</h2>
			<img
				src={tempFiles[currentProjectId].imgUrl}
				alt={`${tempFiles[currentProjectId].name} image`}
				className="z-10"
			/>

			<div className="flex mx-auto absolute bottom-4">
				{tempFiles.map((file, i) => {
					return (
						<div key={i}>
							<div>
								<GoDotFill />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProjectCarousel;
