const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const path = require('path')

const alunoRoute = require('./routes/alunoRoute')

mongoose.connect('mongodb://localhost/escola')

let db = mongoose.connection;

db.on('error', () => console.log('ERROR!!'))
db.once('open', () => console.log('Banco carregado'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', alunoRoute)

app.listen(PORT, () => console.log('Example app listenign on port'))