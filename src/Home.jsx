import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Sidebar from './components/Sidebar';
import ProjectCarousel from './ProjectCarousel';
import MainProjects from './MainProjects';

import { LuArrowUpFromLine } from 'react-icons/lu';

function Home() {
	const [count, setCount] = useState(0);
	const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];

	return (
		<div className="no-scrollbar">
			<div className="snap-y overflow-y-scroll snap-mandatory w-screen h-screen no-scrollbar">
				{/* <Sidebar /> */}
				<section className="flex flex-col h-screen bg-slate-700 snap-start justify-center items-center z-10 relative">
					<ProjectCarousel />
					<div className="flex flex-col absolute top-1/2 z-20">
						<h1 className="text-3xl text-center text-white font-bold mb-4">
							Tiffany Gong
						</h1>

						<div className="flex space-x-2">
							<a
								className="bg-black bg-opacity-35 rounded-md px-3 py-2 text-white font-semibold"
								href="/#project-preview"
							>
								Resume
							</a>
							<a
								className="bg-white bg-opacity-45 rounded-md px-3 py-2 font-semibold"
								href="/projects"
							>
								Projects
							</a>
						</div>
					</div>
				</section>
				{/* <section
					className="h-screen w-100 snap-start flex overflow-y-hidden bg-slate-500"
					id="project-preview"
				>
					<ProjectCarousel />
					<a
						href="/"
						className="absolute bottom-4 right-4 bg-blue-900 bg-opacity-35 border-2 border-blue-900 rounded-full p-3 font-semibold md:invisible lg:invisible"
					>
						<LuArrowUpFromLine />
					</a>
					<a
						href="/"
						className="absolute bottom-4 right-4 bg-blue-900 bg-opacity-35 border-2 border-blue-900 rounded-md px-3 py-2 font-semibold invisible sm:invisible md:visible lg:visible"
					>
						Back to Top
					</a>
				</section> */}
				{/* <section className="h-screen snap-start w-full" id="projects">
					<div className="flex overflow-y-auto flex-col pt-4 mx-8">
						<h1>Projects</h1>
						<MainProjects />
					</div>
				</section> */}
			</div>
		</div>
	);
}

export default Home;
