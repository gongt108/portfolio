import React, { useState } from 'react';
import projects from './assets/projects.json';

function MainProjects() {
	const [selectedProject, setSelectedProject] = useState(0);

	return (
		<div className="overscroll-none over w-full flex flex-col h-screen no-scrollbar">
			<h1 className="text-3xl text-center pt-6 pb-4 text-white bg-slate-700">
				Projects
			</h1>

			<div className="flex space-x-4 mt-6 my-4 text-center mx-auto px-16 pb-4 w-full border-b">
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
				<a
					className={`hover:cursor-pointer hover:font-bold hover:underline w-1/5 ${
						selectedProject == 'other'
							? 'font-bold underline text-teal-600'
							: ''
					}`}
					href="/other-projects"
				>
					Other Projects
				</a>
			</div>
			<div className="overscroll-contain overflow-y-auto px-16">
				<h1>{projects[selectedProject].name}</h1>
				<p className="mb-2">github: link</p>
				<div className="overflow-y-scroll">
					{projects[selectedProject].content}
				</div>
			</div>
		</div>
	);
}

export default MainProjects;
