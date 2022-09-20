import React from 'react';
import logo from '../../assets/img/logo-mini-01.png';

const Landing = () => {
	return (
		<div className='landing-container'>
			<div className='landing'>
				<div className='logo-container'>
					<img className='logo' src={logo} />
				</div>
				<div className='landing-text'>
					<p className='landing-title'>
						Somos unos convencidos de que con los sentidos se crean emociones.
					</p>
					<div className='landing-divider' />
					<p className='landing-subtitle'>
						Asi comenzamos nuestro recorrido en busqueda de un gin que fuera
						capaz de cautivarte y enamorarte. Nos capacitamos, experimentamos,
						equivocamos, aprendimos y evolucionamos. Si bien nuestro nombre
						tiene un tinte de humor politico, “Pasaron Cosas” es una busqueda
						constante e incansable de un producto de calidad que sea parte de
						tus mejores momentos.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
