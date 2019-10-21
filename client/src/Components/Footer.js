import React, {useState} from 'react';
import {FaFacebook, FaLinkedinIn, FaPhone, FaRegEnvelope, FaMapPin} from "react-icons/fa";
import {ReactComponent as LogoWhite} from '../img/test.svg'
import useGlobal from "../store";

function Footer(){

	const [dataToSend, setDataToSend] = useState({})
	// const [confirmation, setConfirmationMessage]=useState(null)
	const [ globalState, globalActions] = useGlobal()


	const submitContactForm =() =>{
		fetch('/submitContactForm', {
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify(dataToSend)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data==="Succes"||"Failed"){
				//setConfirmationMessage(data)
				globalActions.displayContactFormConfirmation()
			}
		})
	}

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
					<input className='footer__contact--form-name' type='text' name='name' id='name' placeholder='Name' onChange={(e)=>{
						e.persist()
						setDataToSend((prevState)=>({
							...prevState, name: e.target.value
						}))
					}}/>
					<input className='footer__contact--form-email' type='email' name='email' id='email' placeholder='Email' onChange={(e)=>{
						e.persist()
						setDataToSend((prevState)=>({
							...prevState, email: e.target.value
						}))
					}}/>
					<input className='footer__contact--form-phone' type='phone' name='phone' id='phone' placeholder='Telefoon' onChange={(e)=>{
						e.persist()
						setDataToSend((prevState)=>({
							...prevState, phone: e.target.value
						}))
					}}/>
					<textarea className='footer__contact--form-message' type='text' name='message' id='message' placeholder='Waar kunnen we u mee helpen?' onChange={(e)=>{
						e.persist()
						setDataToSend((prevState)=>({
							...prevState, message: e.target.value
						}))
					}}>
					</textarea>
					<button className='footer__contact--form-btn' onClick={submitContactForm}>Verzend</button>
				</div>
			</div>
		</div>
		)
}

export default Footer