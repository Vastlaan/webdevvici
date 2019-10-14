import React, {useEffect} from 'react'
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {triggerEffectAbout} from '../functions'

function About(){

	useEffect(()=>{
		window.addEventListener("scroll", triggerEffectAbout, { capture: false, passive: true});
	    return () => {
	      window.removeEventListener("scroll", triggerEffectAbout);
	    };
	},[])

	return(
		<div className='about'>
			<div className='about__mission'>
				<h1 className='about__mission--header'>Wij zijn Imperum</h1>
				<p className='about__mission--para'>
					Ervaren Web Designers en Online Marketeers.
				</p>
			</div>

			<div className='about__quote'>

				<p className='about__quote--left'><FaQuoteLeft/></p>	
				<h1>We don't just make websites,</h1>
				<h1>we make websites that sell.</h1>
				<p className='about__quote--right'><FaQuoteRight/></p>

			</div>

			<div className='about__services'>

				<ul className='about__services--list about__services--list-1'>
					<li className='about__services--list-item about__services--list-item-2'><FaCheckCircle className='about__services--list-item-i'/> Google bedrijfsprofiel</li>
				</ul>
				<p className='about__services--para'>
					Wij creëren jouw website op maat van het bedrijfsprofiel en volgens moderne trends.
				</p>

				<p className='about__services--para'>
					Wij zorgen dat uw bedrijf online zichtbaar is.
				</p>
				<ul className='about__services--list about__services--list-2'>
					<li className='about__services--list-item about__services--list-item-1'><FaCheckCircle className='about__services--list-item-i'/> Zoekmachine optimalisatie</li>
				</ul>

				<ul className='about__services--list about__services--list-3'>
					<li className='about__services--list-item about__services--list-item-3'><FaCheckCircle className='about__services--list-item-i'/> Sociale media</li>
				</ul>	
				<p className='about__services--para'>
					Wij helpen u de campagnes op social media starten om jouw merk te promoten.
				</p>
			</div>

		</div>
		)
}

export default About