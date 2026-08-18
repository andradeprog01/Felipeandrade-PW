// config inicial chamar o express vai procurar o módulo 
const express = require('express')
const app = express() // inicializar as apps

//forma de ler JSON UTILIZAR MIDDLEWARES
app.use( //criando o middlewares 
    express.urlencoded({
        extended: true,
    })
)
    app.use(express.json())

    //rota inicial de get pegar algo ao servidor endpoint
    app.get('/', (req, res) => {

        //mostrar requisição mostrar a resposta que vai ser JSON
        res.json({message: 'Oi Express'})
    })
//23 minutos 12
  //entregar porta
  app.listen(3000)