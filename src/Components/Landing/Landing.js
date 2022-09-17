import React from 'react';
import backgroundVideo from '../../assets/video/bgvideo.mp4';

const Landing = () => {
	return (
		<div className='container'>
			<div className='video-container'>
				<video autoPlay loop muted className='video-landing'>
					<source src={backgroundVideo} type='video/mp4' />
				</video>
			</div>
			<div className='list-container'>
				<h3>Productos</h3>
				<h3>Nosotros</h3>
				<h3>Dónde comprar</h3>
				<h3>Contacto</h3>
			</div>
		</div>
	);
};

export default Landing;
