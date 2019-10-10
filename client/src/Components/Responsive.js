import React, {useEffect} from 'react';
import ResDes from '../img/resdes.png'

function Responsive(){

	useEffect(()=>{

		const moveImage = () =>{
			const responsiveBottomBoundry = (document.querySelector('.responsive').offsetHeight / 2) + document.querySelector('.responsive').offsetTop
			const enterAt = window.innerHeight + window.pageYOffset
			if(responsiveBottomBoundry<=enterAt){
				document.querySelector('.responsive__devices--img').style.transform="translateX(0)"
			}else{
				document.querySelector('.responsive__devices--img').style.transform="translateX(100%)"
			}
		}

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