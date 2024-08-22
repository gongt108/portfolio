import React, { useState } from 'react';
import projects from './assets/projects.json';

function MainProjects() {
	const [selectedProject, setSelectedProject] = useState(0);

	return (
		<div className="overflow-y-scroll w-full flex flex-col">
			<div className="flex space-x-4 mt-4 my-4 text-center mx-auto px-8 pb-4 w-full border-b">
				{projects.map((project, i) => {
					return (
						<h2
							className={`hover:cursor-pointer hover:font-bold hover:underline w-1/5 ${
								selectedProject == i ? 'font-bold underline text-teal-600' : ''
							}`}
							onClick={() => setSelectedProject(i)}
						>
							{project.name}
						</h2>
					);
				})}
			</div>
			<div>
				<h1>{projects[selectedProject].name}</h1>
				<p className="mb-2">github: link</p>
				<p>{projects[selectedProject].content}</p>
			</div>
		</div>
	);
}

export default MainProjects;
