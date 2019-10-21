import React from 'react'
import useGlobal from "../store";

function Confirmation(props){

	const [globalState, globalActions] = useGlobal()

	console.log(globalActions.displayContactFormConfirmation)

	return(
			<div className='confirmation'>
				<div className='confirmation__close' onClick={()=>globalActions.displayContactFormConfirmation()}>
					x
				</div>
				{props.message==="Succes"?
				<div>
					<h1>Bedankt voor uw bericht. U krijgt bevestiging op uw email. Wij gaan met u zo spoedig mogelijk contact opnemen.</h1>
				</div>
				:
				<div>
					<h1>Ups, something went wrong. Please try again later.</h1>
				</div>
			}
			</div>
		)
}

export default Confirmation