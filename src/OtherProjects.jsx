import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import projects from './assets/projects.json';
import OtherProjectsCard from './components/OtherProjectsCard';

function OtherProjects() {
	const [selectedProject, setSelectedProject] = useState(0);
	const navigate = useNavigate();

	const navigateToProject = (i) => {
		console.log(i);
		navigate('/projects');
	};

	return (
		<div className="overflow-y-scroll w-full flex flex-col bg-white">
			<h1 className="text-3xl text-center text-white bg-slate-700 pt-6 pb-4 fixed w-full">
				Other Projects
			</h1>
			<div className="mt-24 mx-8 flex flex-wrap justify-center gap-4 ">
				{projects.map((project, i) => {
					return <OtherProjectsCard />;
				})}
			</div>
		</div>
	);
}

export default OtherProjects;
