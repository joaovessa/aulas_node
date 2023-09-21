const express = require('express')
const app = express()

app.get('/', (requisicao,resposta) =>{
    resposta.send('seja bem vindo ao meu servidor')
})

app.listen (3000,() =>{
    console.log('server rodando na porta 3000')
})