import React, {useState} from 'react'
import Manager from './Manager'

function Login(){

	const [logged, setLogged] = useState(false)

	const handleSubmit = (event) =>{
		event.preventDefault()

		fetch('/api/login', {
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				username: event.target.username.value,
				password: event.target.password.value
			})
		}).then(res=>{
			return res.json()
		}).then(data=>{
			if(data.message===true){
				setLogged(true)
			}else{
				console.log(data.message)
			}
		})
	}

	return(
		<div>
			{
				logged?
				<Manager />
				:
				<div className='login'>
					<h1 className='login__header'>Log in om wijzigingen aan te brengen in uw website</h1>
					<form className='login__form' onSubmit={handleSubmit}>
						<div className='login__form--field'>
							<label>Gebruikersnaam</label>
							<input type='text' name='username' id='username' required/>
						</div>
						<div className='login__form--field'>
							<label>Wachtwoord</label>
							<input type='password' name='password' id='password' required/>
						</div>
						<button type='submit'>Inloggen</button>
					</form>
				</div>
			}
		</div>
			
		)
}

export default Login