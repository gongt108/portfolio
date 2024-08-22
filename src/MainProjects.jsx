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
						>
							{project.name}
						</h2>
					);
				})}
			</div>
			<section id="placeholder1">
				<h1>Placeholder 1</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
			</section>
			<section id="placeholder2">
				<h1>Placeholder 2</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
			</section>
			<section id="placeholder3">
				<h1>Placeholder 3</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
				accusamus consequatur reiciendis sit, corporis neque ducimus odit
				asperiores quam magnam assumenda quidem? Beatae a, impedit voluptatum
				totam eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Corrupti quas accusamus consequatur reiciendis sit, corporis neque
				ducimus odit asperiores quam magnam assumenda quidem? Beatae a, impedit
				voluptatum totam eveniet ullam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quas accusamus consequatur reiciendis sit,
				corporis neque ducimus odit asperiores quam magnam assumenda quidem?
				Beatae a, impedit voluptatum totam eveniet ullam. Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Corrupti quas accusamus consequatur
				reiciendis sit, corporis neque ducimus odit asperiores quam magnam
				assumenda quidem? Beatae a, impedit voluptatum totam eveniet ullam.
			</section>
		</div>
	);
}

export default MainProjects;
