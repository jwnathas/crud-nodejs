const express = require('express')

const server = express()

//Query params = ?nome=NodeJS
//Route params = /curso/2
//requeste body = {nome: 'node js'}

const cursos = ['node js', 'javascript', 'react native']

//localhost:3000/cursos/2
server.get('/curso/:index', (req, res) => {

    const {index} = req.params

    return res.json(cursos[index])

})

server.listen(3000)
