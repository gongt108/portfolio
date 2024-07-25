import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="snap-y overflow-y-scroll snap-mandatory h-screen">
				<section className="flex flex-col h-screen bg-slate-700 snap-start  justify-center items-center">
					<h1 className="text-3xl text-white font-bold mb-4">Vite + React</h1>
					<div className="flex space-x-2">
						<button
							className="bg-black bg-opacity-35 rounded-md px-3 py-2 text-white font-semibold"
							onClick={() => setCount((count) => count + 1)}
						>
							Resume
						</button>
						<button
							className="bg-white bg-opacity-45 rounded-md px-3 py-2 font-semibold"
							onClick={() => setCount((count) => count + 1)}
						>
							Projects
						</button>
					</div>
				</section>
				<section className="h-screen snap-start">
					<h1>Projects</h1>
					<div className="flex">
						<button onClick={() => setCount((count) => count + 1)}>
							Resume {count}
						</button>
						<button onClick={() => setCount((count) => count + 1)}>
							Projects {count}
						</button>
					</div>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</section>
			</div>
		</div>
	);
}

export default App;
