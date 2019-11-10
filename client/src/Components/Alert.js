import React from 'react';
import { MdClose } from "react-icons/md";
import useGlobal from '../store'
import { FaRedo } from "react-icons/fa";

function Alert(){

	const [globalState,globalActions] = useGlobal()

	return(
		<div className='alert'>
			<div className='alert__close'>
				<MdClose className='alert__close--icon' onClick={()=>{
					globalActions.hideAlert()
					return globalActions.setAlertBefore()
				}}/>
			</div>
			<div className='alert__message'>
			{
				(globalState.setAlertMessage==="Before")?
					<div>
						<p className='alert__message--text'>Uw website inhoud wordt gewijzigd. Weet u zeker dat u data wilt wijzigen?</p>
						<div className='alert__message--buttons'>
							<button className='alert__message--buttons-yes' onClick={()=>{
								globalActions.sendManagerForm()
								globalActions.setAlertMessage()
								}
							}>
								Ja
							</button>
							<button className='alert__message--buttons-no' onClick={()=>globalActions.hideAlert()}>Nee</button>
						</div>
					</div>
					:
					(globalState.setAlertMessage==="Wait")?
					<div>
						<p className='alert__message--text'>Even geduld a.u.b.</p>
						<FaRedo className='alert__message--icon'/>
						
					</div>
					:(globalState.setAlertMessage==="Complete")?
					<div>
						<p className='alert__message--text'>Data uploaded succesfully.</p>
						<button className='alert__message--buttons-complete' onClick={()=>{
							globalActions.hideAlert()
							return globalActions.setAlertBefore()
						}}>Ok!</button>
					</div>
					:null

			}
				
			</div>
		</div>
		)
}

export default Alert;