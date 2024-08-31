import React from 'react';

function OtherProjectsCard() {
	return (
		<div className="border py-4 px-6 w-1/2 md:w-1/4 lg:w-1/5">
			<div className="border mt-2">
				<img
					src=""
					alt="project image"
					style={{
						width: '100%',
						height: 'auto',
						aspectRatio: '3 / 3',
					}}
				/>
			</div>
			<h3 className="mt-2">OtherProjectsCard</h3>
			<div className="text-sm flex space-x-2 mt-1">
				<h4 className="border rounded-full w-fit px-2 py-0.5">JS</h4>
				<h4 className="border rounded-full w-fit px-2 py-0.5">React</h4>
			</div>
		</div>
	);
}

export default OtherProjectsCard;
