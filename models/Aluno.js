const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surName: String,
    age: {type: Number, require: true},
    serie: {type: String, required: true},
    av1: {type: Number, require: true},
    av2: {type: Number, require: true},
    av3: {type: Number, require: true}
})

module.exports = mongoose.model('Aluno', alunoSchema)