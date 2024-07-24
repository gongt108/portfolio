import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="snap-y overflow-y-scroll snap-mandatory h-screen">
				<section className="h-screen bg-slate-700 snap-start">
					<h1>Vite + React</h1>
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
