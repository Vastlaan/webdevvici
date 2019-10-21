const keys = require('./config/keys.js')
const Pool = require('pg').Pool
const backup = require('./backup.js')

const pool = new Pool({
	user:keys.DATABASE_USER,
	host:keys.DATABASE_HOST,
	database:keys.DATABASE_NAME,
	password:keys.DATABASE_SECRET,
	port:keys.DATABASE_PORT,
	client_encoding: 'utf8'
})

const getOffert = (req,res)=>{
	pool.query('SELECT * FROM about', (err,results)=>{
		if(err){
			throw new Error()
		}
		if(results.rows){
			const rows = results.rows.reduce((obj,row)=>Object.assign(obj,row),{})
			return res.status(200).json(rows)
		}else{
			return res.status(200).json([])
		}
	})
}

const submitForm = (req,res)=>{
	console.log(req.body)

	let query= ['UPDATE about SET']
	let set = []

	const values = Object.values(req.body)

	  Object.keys(req.body).forEach((key,i)=>{
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
				res.status(200).json("Success")
			}
		})
}

// const createTableAbout = (req,res)=>{

// 	let query = ['CREATE TABLE about ']
// 	const k = []
// 	const values = Object.values(backup.imperum.about)

// 	Object.keys(backup.imperum.about).forEach((key,i)=>{
// 		k.push(`${key} VARCHAR(n)`)
// 	})
// 	query.push(k.join(", "))
// 	query = query.join(' ')
// 	console.log(k, values, query)
	
// 	res.status(200).json("ok")
// 	pool.query(query, (err, result)=>{
// 		if(err){
// 				throw(err)
// 			}
// 			else{
// 				res.status(200).json("Success")
// 			}
// 	})
// }

module.exports = {
	getOffert,
	submitForm,
	// createTableAbout
}
