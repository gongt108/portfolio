import React, { useState } from 'react';

function MainProjects() {
	const [selectedProject, setSelectedProject] = useState(0);

	return (
		<div className="overflow-y-scroll w-screen flex flex-col">
			<div className="flex space-x-4 mt-8 my-4 text-center mx-auto px-8 w-full">
				<h2
					className={`hover:cursor-pointer w-1/5 ${
						selectedProject == 0 ? 'font-bold underline text-teal-600' : ''
					}`}
				>
					Placeholder 1
				</h2>
				<h2 className=" w-1/5 hover:cursor-pointer hover:font-bold hover:underline active:text-teal-600">
					Placeholder 2
				</h2>
				<h2 className=" w-1/5 hover:cursor-pointer active:font-bold active:underline active:text-teal-600">
					Placeholder 3
				</h2>
				<h2 className=" w-1/5 hover:cursor-pointer active:font-bold active:underline active:text-teal-600">
					Placeholder 4
				</h2>
				<h2 className=" w-1/5 hover:cursor-pointer active:font-bold active:underline active:text-teal-600">
					Placeholder 5
				</h2>
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
