import React, {useEffect} from 'react';
import ResDes from '../img/resdes.png'
import {moveImage} from '../functions'

function Responsive({landing}){

	useEffect(()=>{
		window.addEventListener("scroll", moveImage, { capture: false, passive: true});

	    return () => {
	      window.removeEventListener("scroll", moveImage);
	    };
	},[])
	return(
		<div className='responsive'>
			<div className='responsive__description'>
				<h1 className='responsive__description--header'>{landing.responsiveheader}</h1>
				<p className='responsive__description--para'>
					{landing.responsivepara}
				</p>
			</div>
			<div className='responsive__devices'>
				<img className='responsive__devices--img' src={ResDes} alt='devices' />
			</div>
		</div>
		)
}

export default Responsive