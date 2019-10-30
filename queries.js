const keys = require('./config/keys.js')
const Pool = require('pg').Pool
const bcrypt = require('bcrypt');

//temporary
const backup = require('./backup.js')

const pool = new Pool({
	user:keys.DATABASE_USER,
	host:keys.DATABASE_HOST,
	database:keys.DATABASE_NAME,
	password:keys.DATABASE_SECRET,
	port:keys.DATABASE_PORT,
	client_encoding: 'utf8'
})

const getAbout = async (req,res)=>{

	pool.query('SELECT * FROM about', (err,results)=>{
		if(err){
			throw new Error(err)
		}
		if(results.rows){
			const rows = results.rows.reduce((obj,row)=>Object.assign(obj,row),{})
			//console.log(rows)
			return res.status(200).json(rows)
		}else{
			return res.status(200).json({})
		}
	})
}

const getOffert = async (req,res)=>{

	pool.query('SELECT * FROM offert', (err,results)=>{
		if(err){
			throw new Error(err)
		}
		if(results.rows){
			const rows = results.rows.reduce((obj,row)=>Object.assign(obj,row),{})
			//console.log(rows)
			return res.status(200).json(rows)
		}else{
			return res.status(200).json({})
		}
	})
}

const getAll = async (req,res)=>{

	const arr = await pool.query(" select table_name from information_schema.tables where table_schema='public';")
	
    let namesArr = arr.rows.filter(each=>{
		return each.table_name !== 'users'	 	
    })
    namesArr = namesArr.map(each=>each.table_name)

    let final = {}
    for(let i=0; i<namesArr.length; i++){ 	
    	const r = await pool.query(`SELECT * FROM ${namesArr[i]}`)
    	const rows = r.rows.reduce((obj,row)=>Object.assign(obj,row),{})
    	//console.log(typeof namesArr[i])
    	const section = {[namesArr[i]]:rows}
    	Object.assign(final, section)
    }
    //console.log(final)
	return res.status(200).json(final)
}

const submitForm = (req,res)=>{
	console.log(req.body)

	Object.values(req.body).map((section,i)=>{
		const sectionName = Object.keys(req.body)[i]
		console.log(sectionName, req.body[sectionName])
		let query = [`UPDATE ${sectionName} SET`]
		let set = []
		const values = Object.values(req.body[sectionName])

		Object.keys(req.body[sectionName]).forEach((key,i)=>{
			set.push(`${key} = $${i+1}`)
		})

		query.push(set.join(', '))
		query = query.join(' ')
		console.log(query, values)
		pool.query(query, values , (err,results)=>{
			if(err){
				throw(err)
			}
			else{
				console.log("Succes")
			}
		})
	})

	return res.status(200).json("Success")
}

const validateUser = async (username,password)=>{

	let isValid = false

	try{
		const users = await pool.query('SELECT * FROM users')
		// console.log(users)
		users.rows.map(user=>{
			if(user.name===username){
				if(bcrypt.compareSync(password, user.hash)){
					//valid user
					isValid=true
				}
			}
		})
		
	}
	catch(err){
		console.log(err)
		return false
	}

	return isValid
	
}
//==========================================BELOW METHODS HAS TO BE HIDDEN, THEY ARE USED TO CREATE TABLES===========================================
//createTable method has to be hidden
const createTable = async (req,res)=>{

	let query = ['CREATE TABLE landing(']
	const k = []
	 const values = Object.values(backup.imperum.landing)

	Object.keys(backup.imperum.landing).forEach((key,i)=>{
		k.push(`${key} VARCHAR(1500)`)
	})
	query.push(k.join(", "))
	query.push([')'])
	query = query.join(' ')
	console.log("query create table ===", query)
	
	try{
		const responseCreateTable = await pool.query(query)
	}
	catch(err){
		console.log(err)
		res.status(400).json('Ups, something went wrong')
	}
	

	let queryInsert = ['INSERT INTO landing(']
	const ks = Object.keys(backup.imperum.landing)
	queryInsert.push(ks.join(', '))
	queryInsert.push([') VALUES('])
	for(let i =0; i<Object.values(backup.imperum.landing).length;i++){
		if(i+1===Object.values(backup.imperum.landing).length){
			queryInsert.push([`$${i+1}`])
		}else{
			queryInsert.push([`$${i+1}, `])
		}
		
	}
	queryInsert.push(')')
	queryInsert = queryInsert.join(' ')
	console.log("query insert into table ===", queryInsert)
	console.log("values ===", values)

	try{
		const responseInsertTable = await pool.query(queryInsert,values)
	}
	catch(err){
		console.log(err)
		res.status(400).json('Ups, something went wrong')
	}
	

	res.status(200).json("ok")
}

const createUserInDatabase = async (req,res,data) =>{
	
	// const queryCreate = ('CREATE TABLE users( name VARCHAR(100), hash VARCHAR(500) UNIQUE, id SERIAL PRIMARY KEY)')
	// const queryInsert = ('INSERT INTO users VALUES($1, $2)')
	// const values = Object.values(data)
	// console.log(queryCreate, queryInsert, values)

	// try{
	// 	const resultCreate = await pool.query(queryCreate)
	// }
	// catch(err){
	// 	console.log(err)
	// 	res.status(400).json('ups, something went wrong')
	// }

	// try{
	// 	const resultIsert = await pool.query(queryInsert, values)
	// }
	// catch(err){
	// 	console.log(err)
	// 	res.status(400).json('ups, something went wrong')
	// }

	res.status(200).json("Ok")
}

module.exports = {
	getAbout,
	getOffert,
	getAll,
	submitForm,
	validateUser,
	createTable,
	createUserInDatabase
}
