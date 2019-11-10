import React, {useEffect, useState} from 'react'
import useGlobal from '../store'
import { IoMdLogOut } from "react-icons/io";
import Alert from './Alert'

function Manager(){

	const[globalState, globalActions] = useGlobal()

	const [all, setAll] = useState({})
	const [send, setSend] = useState(false)

	useEffect(()=>{
		fetch('/getAll').then(res=>res.json()).then(data=>{
			setAll(data)
		})
	},[])

	useEffect(()=>{
		if(globalState.sendManagerForm){
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

			fetch('/submitForm',{
				method:"POST",
				credentials:"include",
				headers:{
					"Content-Type": "application/json"
				},
				body: JSON.stringify(dataToSubmit)
			}).then(res=>res.json())
			  .then(data=>{
			  	if(data==="Success"){
			  		globalActions.setAlertComplete()
			  	}
			  })
			  .catch(err=>console.log(err))
		}else{
			//console.log('sendData is false')
			return
		}			
	},[globalState.sendManagerForm])

	const submitForm =() =>{
		if(all==={}){
			return null
		}
		globalActions.displayAlert() 
	}

	const scrollInto = (key)=>{

		const section = document.querySelector(`#${key}`)
		//calc adjust position of section (-90px, thats a height of fixed navbar above)
		const adjustPosition = window.pageYOffset + section.getBoundingClientRect().top - 50
		console.log(adjustPosition, key)
		return window.scrollTo(0, adjustPosition)

		//document.querySelector(`#${key}`).scrollIntoView({behavior:"smooth"})
	}

	const amountOfSections = Object.keys(all).length
	const percentageOfOneSection = 100 / amountOfSections
	const colors = ["#6aa986","#be9093","#7db4b0","#b5d4d2","#6aa986","#be9093","#6aa986","#be9093","#7db4b0","#b5d4d2","#6aa986","#be9093"]

	return(
		<div className='manager'>
			
				{
					//maping through values of massive object with all data from database. Each value is an object of sections' paragraphs 
					//containing key:value, where key is id and value accurate text within it, for example all.section = {missionheader: 'lorem ipsum dolor', ...}
					Object.values(all).map((section,i)=>{
						const sectionName = Object.keys(all)[i]

						return(
							<div className='manager__section' key={`manager-section-${i}`} id={sectionName} style={{backgroundColor:colors[i]}}>
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
									<div className='manager__scrollbar'>
									{
										Object.keys(all).map((key,i)=>{
											return(
												<div className='manager__scrollbar--section' 
													key={`scrollbar-${i}`}
													style={{width: `${percentageOfOneSection}%`, backgroundColor:colors[i]}}
													onClick={()=>scrollInto(key)}
												>
													{key}
												</div>
												)
										})
									}
									</div>
									<div 
										className='manager__logout'
										onClick={()=>{
											localStorage.removeItem('token')
											window.location.reload()
										}}
									>	
										<IoMdLogOut className='manager__logout--icon'/>
										<span className='manager__logout--text'>Log uit</span>
									</div>
							</div>
							)
					})
					
				}
			
			<button className='manager__button' onClick={()=>submitForm()}>Submit</button>
			{
				globalState.displayAlert?<Alert/>:null
			}
		</div>
		)
}

export default Manager