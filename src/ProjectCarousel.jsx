import React, { useState, useEffect } from 'react';

const tempFiles = [
	{
		name: 'Project 1',
		imgUrl: 'https://www.tisanegroup.com/wp-content/uploads/2021/03/bg.jpg',
	},
];
function ProjectCarousel() {
	const [currentProject, setCurrentProject] = useState(0);

	return (
		<div>
			ProjectCarousel
			{tempFiles.map((file, i) => {
				return (
					<div key={i}>
						<h2>{file.name}</h2>
						<img src={file.imgUrl} alt={`${file.name} image`} />
						<div></div>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectCarousel;
