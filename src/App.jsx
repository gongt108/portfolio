import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './Home';
import ProjectCarousel from './ProjectCarousel';
import MainProjects from './MainProjects';
import OtherProjects from './OtherProjects';

function App() {
	const [count, setCount] = useState(0);
	const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];

	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/resume" element={<ProjectCarousel />} />
					<Route path="/projects" element={<MainProjects />} />
					<Route path="/other-projects" element={<OtherProjects />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
