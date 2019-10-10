import React, {useEffect} from 'react';
import { MdDevices } from "react-icons/md";
import { FaSearchengin, FaGlobe } from "react-icons/fa";

function Services() {

	useEffect(()=>{
		const showServices = async() =>{
			const services = document.querySelector('.services')
			const servicesHalfView =  (services.offsetHeight / 2) + services.offsetTop;
			const enterEffectAt = window.innerHeight + window.pageYOffset
			if(enterEffectAt>=servicesHalfView){
				await setTimeout(()=>document.querySelector('.services__web').style.opacity="1",100)
				await setTimeout(()=>document.querySelector('.services__seo').style.opacity="1",300)
				await setTimeout(()=>document.querySelector('.services__marketing').style.opacity="1",500)
			}else{
				document.querySelector('.services__web').style.opacity="0"
				document.querySelector('.services__seo').style.opacity="0"
				document.querySelector('.services__marketing').style.opacity="0"
			}
			
		}
		showServices()
		window.addEventListener("scroll", showServices)
		return ()=>window.removeEventListener("scroll", showServices);
	},[])
	return(
		<div className='services'>
			<div className='services__web services__section'>
				<div className='services__section--icon'>
					<MdDevices className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>Web Design</h1>
				<p className='services__section--para'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
				<a className='services__section--btn' href="/">Meer</a>
			</div>
			<div className='services__seo services__section'>
				<div className='services__section--icon'>
					<FaSearchengin className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>Seo</h1>
				<p className='services__section--para'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.		
				</p>
				<a className='services__section--btn' href="/">Meer</a>
			</div>
			<div className='services__marketing services__section'>
				<div className='services__section--icon'>
					<FaGlobe className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>Online Marketing</h1>
				<p className='services__section--para'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
				<a className='services__section--btn' href="/">Meer</a>
			</div>
		</div>
		)
}

export default Services