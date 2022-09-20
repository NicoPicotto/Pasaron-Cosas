import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Landing from '../Components/Landing/Landing';
import Products from '../Components/Products/Products';

const Home = () => {
	return (
		<>
			<Navbar />
			<Landing />
            <Products />
		</>
	);
};

export default Home;
