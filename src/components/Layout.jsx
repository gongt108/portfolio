// frontend/src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className="h-screen flex flex-col relative">
			<Sidebar />
			<main className="flex flex-1">{children}</main>
		</div>
	);
};

export default Layout;
