const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries.js')
const keys = require('./config/keys')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const authRoutes = require('./authRoutes')


const app = express()
app.use(bodyParser.json())
//responsible for logging the master user
app.post('/api/login', authRoutes.login)
//TEMPORARY create user
app.get('/createUser', authRoutes.createUser)
//responsible for retriving text for section About
app.get('/getAbout', db.getAbout)
//responsible for retriving text for section Offert
app.get('/getOffert', db.getOffert)
//responsible for retriving all tables from database
app.get('/getAll', db.getAll)
//responsible for submiting the text changes to database
app.post('/submitForm', db.submitForm)

//TEMPORARY
app.get('/createTable', db.createTable)

app.post('/submitContactForm', (req,res)=>{
	console.log(req.body)

	const options = {
		auth:{
			api_key: keys.SENDGRID_API_KEY
		}
	}
	const mailer = nodemailer.createTransport(sgTransport(options))

	const mail = {
		from: 'no-reply@imperum.com', // sender address
		to: ['vastlaan@mail.com', `${req.body.email}`], // list of receivers
		subject:
			"Bevestiging Contact Form Imperum.nl", // Subject line
		html: `	<div>
					<div>
						<h1>Dank u wel! Wij hebben uw bericht in goede order ontvangt!</h1>	
					</div>
					<div>
						<h3 style="text-align:center">Name: ${req.body.name}.</h3>
						<h4 style="text-align:center">Email: ${req.body.email}.</h4>
						<h4 style="text-align:center">Phone: ${req.body.phone}.</h4>
						<h4 style="text-align:center">Message: ${req.body.message}.</h4>
					</div>
					<h1>Wij gaan met u zo spoedig contact opnemen</h1>
				</div>`
	}

	mailer.sendMail(mail, (err,result)=>{
		if(err){
			res.status(400).json("Failed")
			return console.log(err)
		}else{
			console.log(`Message sent! ${result}`)
			res.status(200).json('Succes')
		}
	})


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