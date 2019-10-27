import React, {useEffect, useState} from 'react'

function Manager(){

	const [all, setAll] = useState({})

	useEffect(()=>{
		fetch('/getAll').then(res=>res.json()).then(data=>{
			setAll(data)
		})
	},[])

	const submitForm = () =>{
		if(all==={}){
			return null
		}

		const arrayOfInputFields = document.querySelectorAll('.inputField')
		//console.log(arrayOfInputFields)
		let dataToSubmit = {}
		arrayOfInputFields.forEach((field,i)=>{
			//console.log(field.name, field.value, field.id)

			if(!dataToSubmit[field.name]){
				dataToSubmit[field.name]={[field.id]: field.value || all[field.name][field.id]}
			}else{
				Object.assign(dataToSubmit[field.name], {[field.id]: field.value || all[field.name][field.id]})
			}

		})
		//console.log(dataToSubmit)


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
			
				{
					//maping through values of massive object with all data from database. Each value is an object of sections' paragraphs 
					//containing key:value, where key is id and value accurate text within it, for example all.section = {missionheader: 'lorem ipsum dolor', ...}
					Object.values(all).map((section,i)=>{
						const sectionName = Object.keys(all)[i]

						return(
							<div className='manager__section' key={`manager-section-${i}`}>
									<h1>{sectionName} Section Fields</h1>
									{
										Object.keys(section).map((key,i)=>{
											return(
												
													<div className='manager__section--artikel' key={`manager-${key}`}>
														<h3>Paragraph nr {i+1} current value:</h3>
														<p>{section[key]}</p>
														<h3>Paragraph {i+1} change To:</h3>
														<textarea type='text' className='inputField' id={`${key}`} name={sectionName}></textarea>
													</div>
												
												)
										})
									}
							</div>
							)
					})
					
				}
			
			<button className='manager__button' onClick={()=>submitForm()}>Submit</button>
		</div>
		)
}

export default Manager