const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries.js')


const app = express()
app.use(bodyParser.json())

app.get('/getOffert', db.getOffert)

app.post('/submitForm', db.submitForm)

//temporary
//app.get('/createTableAbout', db.createTableAbout)


app.get('/test', (req, res)=>{
	res.status(200).json("It is working")
})


if(process.env.NODE_ENV==="production"){

	app.use(express.static("client/build"))
	const path = require('path')

	app.get('*', (req,res)=>{		
		res.sendFile(path.resolve(__dirname,"client","build","index.html"))
	})
}

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
	console.log(`App is listening on port ${PORT}`)
})