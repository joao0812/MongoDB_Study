const express = require('express');


const Aluno = require('../models/Aluno');
const alunoController = require('../controllers/alunoController')

const router = express.Router()

// --------------------------GET--------------------------------

// router.use() -> Abrange todas as requisições HTTP, usada quando n se quer definir uma requisição específica como GER, POST, DELETE e etc.

router.get('/aluno/all', alunoController.getAllAlunos)

router.get('/aluno/:name', async (req, res) => {
    let name = req.params.name
    let docs = await Aluno.findOne({ name })
    if (docs) {
        res.send(docs)
        console.log(docs.av1 + ' | ' + docs.av2 + ' | ' + docs.av3)
    }
    else {
        res.send(`${name} nor found`)
    }
})

router.get('/aluno', (req, res) => {
    res.render('index')
})
router.get('/aluno/get/all', alunoController.showAllAlunos)
// --------------------------POST--------------------------------

// express.urlencoded permite pegar os dados que vem a paritr de um formulário
router.post('/aluno', express.urlencoded({ extended: true }), alunoController.addAluno)

router.delete('/aluno/remove/:id', alunoController.deleteAluno)
router.delete('/aluno/remove/', express.urlencoded({ extended: true }), alunoController.deleteAluno)

module.exports = router
