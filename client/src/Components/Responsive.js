import React, {useEffect} from 'react';
import ResDes from '../img/resdes.png'
import {moveImage} from '../functions'

function Responsive(){

	useEffect(()=>{
		window.addEventListener("scroll", moveImage);

	    return () => {
	      window.removeEventListener("scroll", moveImage);
	    };
	},[])
	return(
		<div className='responsive'>
			<div className='responsive__description'>
				<h1 className='responsive__description--header'>Responsive Design</h1>
				<p className='responsive__description--para'>
					In de wereld bestaan meer dan 35 milijard apparaten die met Internet kunnen verbinden. 
					Laptops, PC's, tablets, mobieltjes - bijna idereen maakt dagelijks gebruik van een van die apparaten.
					Daarom is het heel belangrijk dat jouw website goed eruitziet op verschillende schermresoluties.
				</p>
			</div>
			<div className='responsive__devices'>
				<img className='responsive__devices--img' src={ResDes} alt='devices' />
			</div>
		</div>
		)
}

export default Responsive