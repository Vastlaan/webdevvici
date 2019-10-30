import React, {useEffect} from 'react';
import { MdDevices } from "react-icons/md";
import { FaSearchengin, FaGlobe } from "react-icons/fa";
import {showServices} from '../functions'

function Services({landing}) {

	useEffect(()=>{
		
		showServices()
		window.addEventListener("scroll", showServices, { capture: false, passive: true})
		return ()=>window.removeEventListener("scroll", showServices);
	},[])
	return(
		<div className='services'>
			<div className='services__web services__section'>
				<div className='services__section--icon'>
					<MdDevices className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>{landing.servicesheader1}</h1>
				<p className='services__section--para'>
					{landing.servicespara1}
				</p>
				<a className='services__section--btn' href="/">{landing.servicesbutton1}</a>
			</div>
			<div className='services__seo services__section'>
				<div className='services__section--icon'>
					<FaSearchengin className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>{landing.servicesheader2}</h1>
				<p className='services__section--para'>
					{landing.servicespara2}		
				</p>
				<a className='services__section--btn' href="/">{landing.servicesbutton2}</a>
			</div>
			<div className='services__marketing services__section'>
				<div className='services__section--icon'>
					<FaGlobe className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>{landing.servicesheader3}</h1>
				<p className='services__section--para'>
					{landing.servicespara3}
				</p>
				<a className='services__section--btn' href="/">{landing.servicesbutton3}</a>
			</div>
		</div>
		)
}

export default Services