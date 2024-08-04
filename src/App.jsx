import { useState } from 'react';
import './index.css';

import ProjectCarousel from './ProjectCarousel';

import { LuArrowUpFromLine } from 'react-icons/lu';

function App() {
	const [count, setCount] = useState(0);
	const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];

	return (
		<div>
			<div className="snap-y overflow-y-scroll snap-mandatory h-screen">
				<section className="flex flex-col h-screen bg-slate-700 snap-start  justify-center items-center">
					<h1 className="text-3xl text-white font-bold mb-4">Vite + React</h1>
					<div className="flex space-x-2">
						<a
							className="bg-black bg-opacity-35 rounded-md px-3 py-2 text-white font-semibold"
							href="/#project-preview"
						>
							Resume
						</a>
						<a
							className="bg-white bg-opacity-45 rounded-md px-3 py-2 font-semibold"
							href="/#project-preview"
						>
							Projects
						</a>
					</div>
				</section>
				<section className="h-screen snap-start flex" id="project-preview">
					<div className="flex snap-x h-100">
						{/* <div className="w-100 snap-start bg-${color[0]}-500"></div> */}
						<ProjectCarousel />
					</div>
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
				</section>
				<section className="h-screen snap-start" id="projects">
					<div className="flex overflow-y-auto">
						<h1>Projects</h1>
						<button onClick={() => setCount((count) => count + 1)}>
							Resume {count}
						</button>
						<button onClick={() => setCount((count) => count + 1)}>
							Projects {count}
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
