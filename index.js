const express = require('express')
const server = express()

const cursos = ['node js', 'javascript', 'react native']

server.use(express.json())

//retorna todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

//localhost:3000/cursos/2
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params

    return res.json(cursos[index])

})

//criando um novo curso
server.post('/cursos', (req, res) => {
    const {name} = req.body
    cursos.push(name)

    return res.json(cursos)
})

//atualizando um curso
server.put('/cursos/:index', (req, res) => {

    const {index} = req.params
    const {name} = req.body

    cursos[index] = name
    
    return res.json(cursos)
})

//deletando algum curso

server.delete('/cursos/:index', (req, res) => {

    const {index} = req.params
    
    cursos.splice(index, 1)

    return res.json(cursos)
})

server.listen(3000)
