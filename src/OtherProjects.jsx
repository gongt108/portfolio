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
		<div className="overflow-y-scroll w-full flex flex-col pt-4 mx-8">
			<h1 className="text-3xl text-center mt-2">Other Projects</h1>
			<div className="mt-4 flex flex-wrap justify-center gap-4 ">
				{projects.map((project, i) => {
					return <OtherProjectsCard />;
				})}
			</div>
		</div>
	);
}

export default OtherProjects;
