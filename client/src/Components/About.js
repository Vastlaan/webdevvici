import React, {useEffect, useState} from 'react'
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {triggerEffectAbout} from '../functions'

function About(){

	const [data, setData] = useState({})

	useEffect(()=>{

		fetch('/getAbout').then(res=>res.json()).then(data=>{
			setData(data)
		})

		window.addEventListener("scroll", triggerEffectAbout, { capture: false, passive: true});
	    return () => {
	      window.removeEventListener("scroll", triggerEffectAbout);
	    };
	},[])

	return(
		<div className='about'>
			<div className='about__mission'>
				<h1 className='about__mission--header'>{data.missionheader}</h1>
				<p className='about__mission--para'>
					{data.missionpara}
				</p>
			</div>

			<div className='about__quote'>

				<p className='about__quote--left'><FaQuoteLeft/></p>	
				<h1>{data.quote1}</h1>
				<h1>{data.quote2}</h1>
				<p className='about__quote--right'><FaQuoteRight/></p>

			</div>

			<div className='about__services'>

				<ul className='about__services--list about__services--list-1'>
					<li className='about__services--list-item about__services--list-item-2'><FaCheckCircle className='about__services--list-item-i'/> {data.servicesitem1}</li>
				</ul>
				<p className='about__services--para'>
					{data.servicespara1}
				</p>

				<p className='about__services--para'>
					{data.servicespara2}
				</p>
				<ul className='about__services--list about__services--list-2'>
					<li className='about__services--list-item about__services--list-item-1'><FaCheckCircle className='about__services--list-item-i'/> {data.servicesitem2}</li>
				</ul>

				<ul className='about__services--list about__services--list-3'>
					<li className='about__services--list-item about__services--list-item-3'><FaCheckCircle className='about__services--list-item-i'/>{data.servicesitem3}</li>
				</ul>	
				<p className='about__services--para'>
					{data.servicespara3}
				</p>
			</div>

		</div>
		)
}

export default About