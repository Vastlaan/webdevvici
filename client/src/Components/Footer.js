import React from 'react';
import {FaFacebook, FaLinkedinIn, FaPhone, FaRegEnvelope, FaMapPin} from "react-icons/fa";
import {ReactComponent as LogoWhite} from '../img/test.svg'

function Footer(){

	return(
		<div className='footer'>
			<div className='footer__contact'>
				<div className='footer__contact--data'>
					<div className='footer__contact--data-logo'>
						<LogoWhite />
					</div>
					<h1 className='footer__contact--data-name'>
						Imperum
					</h1>
					<h3 className='footer__contact--data-subname'>
						IT professionals
					</h3>
					<ul className='footer__contact--data-social'>
						<li><FaFacebook /></li>
						<li><FaLinkedinIn /></li>
					</ul>
					<a href='tel:00310682307051' className='footer__contact--data-phone'><FaPhone className='footer__contact--data-phone-i'/>06 82 30 70 51</a>
					<a href='mailTo:info@imperum.nl' className='footer__contact--data-email'><FaRegEnvelope className='footer__contact--data-email-i'/>info@imperum.nl</a>
					<ul className='footer__contact--data-address'>
						<li><FaMapPin className='footer__contact--data-address-i'/> Oostervenne 397</li>
						<li>1444XN Purmerend</li>
						<li>Nederland</li>
					</ul>

				</div>
				<div className='footer__contact--form'>
					<h3 className='footer__contact--form-header'>Contact Ons</h3>
					<input className='footer__contact--form-name' type='text' name='name' id='name' placeholder='Name'/>
					<input className='footer__contact--form-email' type='email' name='email' id='email' placeholder='Email'/>
					<input className='footer__contact--form-phone' type='phone' name='phone' id='phone' placeholder='Telefoon'/>
					<textarea className='footer__contact--form-message' type='email' name='email' id='email' placeholder='Waar kunnen we u mee helpen?'></textarea>
					<button className='footer__contact--form-btn'>Verzend</button>
				</div>
			</div>
		</div>
		)
}

export default Footer