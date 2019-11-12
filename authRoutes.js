const bcrypt = require('bcrypt');
const db = require('./queries');
const jwt = require('jsonwebtoken');
const keys = require('./config/keys')


const login =async (req,res) =>{

	//check if user alreaddy logged in
	if(req.body.token){
		//console.log(req.body.token)
		const username = jwt.verify(req.body.token, keys.JWT_SECRET)
		if(username){
			return res.status(200).json({message:true})
		}else{
			return res.status(404).json({message:false})
		}
		
	}
	//if not logged in wait for credentials and validate
	const {username, password} = req.body
	const validUser = await db.validateUser(username,password)
	//if valid create token and allow change status of logged at frontend state to true
	if(validUser){
		const token = jwt.sign({username}, keys.JWT_SECRET, {expiresIn:"12h"})
		return res.status(200).json({
			message: true,
			token
		})
	//if not valid reject and send false - not allowed to change state of logged at client
	}else{
		return res.status(403).json({message: false})
	}
	
}
//the below is hidden in queries.js
const createUser = (req,res)=>{
	// data={
	// 	username: user.name,
	// 	password: bcrypt.hashSync(user.password,10)
	// }
	// db.createUserInDatabase(req,res,data)
}

module.exports = {
	login,
	createUser
}