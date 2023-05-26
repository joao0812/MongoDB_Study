const Aluno = require('../models/Aluno')

const addAluno = async (req, res) => {
    let aluno = new Aluno(req.body)
    try {
        let doc = await aluno.save()
        res.send('Aluno adicionado com sucesso!')
    } catch (erro) {
        res.send(`Erro ao tentar adicionar aluno: ${erro}`)
    }
}

const getAllAlunos = async (req, res) => {
    try {
        let alunos = await Aluno.find({})
        console.log(alunos)
        res.send(alunos)
    } catch (erro) {
        res.send(`Erro: ${erro}`)
    }
}
const showAllAlunos = async (req, res) => {
    try {
        let alunos = await Aluno.find({})
        res.render('allAlunos.ejs', { alunos: alunos })
    } catch (erro) {
        res.send(`Erro: ${erro}`)
    }
}

const deleteAluno = async (req, res) => {
    let aluno_id = req.params.id
    console.log(aluno_id)
    if (!aluno_id) {
        aluno_id = req.body.id
    }
    try {
        await Aluno.findByIdAndDelete(aluno_id)
        res.send(aluno_id)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { addAluno, getAllAlunos, showAllAlunos, deleteAluno }