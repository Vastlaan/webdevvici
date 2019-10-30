const bcrypt = require('bcrypt');
const db = require('./queries')
//to delete
// const user = {
// 	name: 'ml.antczak@gmail.com',
// 	password: 'psychedryna66'
// }

const login =async (req,res) =>{

	const {username, password} = req.body
	const validUser = await db.validateUser(username,password)

	if(validUser){
		res.status(200).json({message: true})
	}else{
		res.status(403).json({message: false})
	}
	
}
const createUser = (req,res)=>{
	data={
		username: user.name,
		password: bcrypt.hashSync(user.password,10)
	}
	db.createUserInDatabase(req,res,data)
}

module.exports = {
	login,
	createUser
}