import React, {useEffect, useState} from 'react'

function Manager(){

	const [offert, setOffert] = useState({})

	useEffect(()=>{
		fetch('/getOffert').then(res=>res.json()).then(data=>{
			setOffert(data)
		})
	})

	const submitForm = () =>{
		if(offert==={}){
			return null
		}
		const missionheader = document.querySelector('#missionheader').value || offert.missionheader
		const missionpara = document.querySelector('#missionpara').value || offert.missionpara
		const quote1 = document.querySelector('#quote1').value || offert.quote1
		const quote2 = document.querySelector('#quote2').value || offert.quote2
		const servicesitem1 = document.querySelector('#servicesitem1').value || offert.servicesitem1
		const servicespara1 = document.querySelector('#servicespara1').value || offert.servicespara1
		const servicesitem2 = document.querySelector('#servicesitem2').value || offert.servicesitem2
		const servicespara2 = document.querySelector('#servicespara2').value || offert.servicespara2
		const servicesitem3 = document.querySelector('#servicesitem3').value || offert.servicesitem3
		const servicespara3 = document.querySelector('#servicespara3').value || offert.servicespara3

		const dataToSubmit = {
			missionheader,
			missionpara,
			quote1,
			quote2,
			servicesitem1,
			servicespara1,
			servicesitem2,
			servicespara2,
			servicesitem3,
			servicespara3
		}

		fetch('/submitForm',{
			method:"POST",
			credentials:"include",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(dataToSubmit)
		})
	}

	return(
		<div className='manager'>
			<div className='manager__section'>
				<h1>Over Ons Section Fields</h1>
				<div className='manager__section--artikel'>
					<h3>Header Current:</h3>
					<p>{offert.missionheader}</p>
					<h3>Header Change To:</h3>
					<input type='text' id='missionheader' />
					<h3>Header 2 Current:</h3>
					<p>{offert.missionpara}</p>
					<h3>Header 2 Change To:</h3>
					<input type='text' id='missionpara' />
				</div>
				<div className='manager__section--artikel'>
					<h3>Quote1 Current:</h3>
					<p>{offert.quote1}</p>
					<h3>Quote1 Change To:</h3>
					<input type='text' id='quote1' />
					<h3>Quote2 Current:</h3>
					<p>{offert.quote2}</p>
					<h3>Quote2 Change To:</h3>
					<input type='text' id='quote2' />
				</div>
				<div className='manager__section--artikel'>
					<h3>Services 1.1 Current:</h3>
					<p>{offert.servicesitem1}</p>
					<h3>Services 1.1 Change To:</h3>
					<input type='text' id='servicesitem1' />
					<h3>Services 1.2 Current:</h3>
					<p>{offert.servicespara1}</p>
					<h3>Services 1.2 Change To:</h3>
					<input type='text' id='servicespara1' />

					<h3>Services 2.1 Current:</h3>
					<p>{offert.servicesitem2}</p>
					<h3>Services 2.1 Change To:</h3>
					<input type='text' id='servicesitem2' />
					<h3>Services 2.2 Current:</h3>
					<p>{offert.servicespara2}</p>
					<h3>Services 2.2 Change To:</h3>
					<input type='text' id='servicespara2' />

					<h3>Services 3.1 Current:</h3>
					<p>{offert.servicesitem3}</p>
					<h3>Services 3.1 Change To:</h3>
					<input type='text' id='servicesitem3' />
					<h3>Services 3.2 Current:</h3>
					<p>{offert.servicespara3}</p>
					<h3>Services 3.2 Change To:</h3>
					<input type='text' id='servicespara3' />
					
				</div>
			</div>
			<button className='manager__button' onClick={()=>submitForm()}>Submit</button>
		</div>
		)
}

export default Manager