const user = {
	name: 'ml.antczak@gmail.com',
	password: 'psychedryna66'
}

const login = (req,res) =>{
	console.log(req.body)
	const {username, password} = req.body
	if(username===user.name && password===user.password){
		res.status(200).json({message: true})
	}else{
		res.status(403).json({message: false})
	}
	
}

module.exports = {
	login
}