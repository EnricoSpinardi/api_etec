// Enrico A. Spinardi 

//importa express
const express = require('express');
const app = express();

//cria rota GET - Principal
app.get('/', (req, res) =>{
    //retorna json
    res.json({
        mensagem: 'API Funcionando',
        curso: 'ETEC DS'
    });

});

app.get('/usuarios', (req, res) => {
    const usuarios = [
        {
            id: 1,
            nome: 'André',
            idade: 23,
            email: 'andre@gmail.com',
            cidade: 'Sorocaba'
        },

        {
            id: 2,
            nome: 'Maria',
            idade: 19,
            email: 'maria@gmail.com',
            cidade: 'Salto'
        },

        {
            id: 3,
            nome: 'Pedro',
            idade: 45,
            email: 'pedro@gmail.com',
            cidade: 'São Paulo'
        },

        {
            id: 4,
            nome: 'Lucas',
            idade: 20,
            email: 'lucas@gmail.com',
            cidade: 'Itu'
        }
    ];

    res.json(usuarios);
});

/*
//cria rota GET
app.get('/', (req, res)=> {
    //envia a resposta
    res.send("API funcionado!");
}); 
*/

//Inicia servidor
app.listen(3000, () => {
    console.log("Servidor Funcionado");
});
