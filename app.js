require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
const app = express()

const path = require('path')

const alunoRoute = require('./routes/alunoRoute')

mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => console.log('MongoDB Conected')).catch((error)=> console.log(error))

let db = mongoose.connection;

db.on('error', () => console.log('ERROR!!'))
db.once('open', () => console.log('Banco carregado'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

// router.use() -> Abrange todas as requisições HTTP, usada quando n se quer definir uma requisição específica como GER, POST, DELETE e etc.
app.use('/', alunoRoute)

app.listen(process.env.PORT, () => console.log(`Example app listenign on port ${process.env.PORT}`))