
//importa express
const express = require('express');
const mysql = require('mysql2')
const app = express();

//conexão mysql
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'etec_api'
});
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

app.get('/produtos', (req, res) => {
    const produtos = [
        {
            id: 23,
            nome: 'Lápis',
            quantidade: 50
        },
        {
            id: 82,
            nome: 'Tesoura',
            quantidade: 35
        },
    ];
    res.json(produtos)
});

app.get('/filmes', (req, res) => {
    const filmes = [
        {
            nome: 'Shrek',
            sinopse: 'Shrek segue um ogro rabugento que tem seu pântano invadido por criaturas de contos de fadas exiladas pelo tirano Lord Farquaad. Para recuperar a paz e suas terras, ele faz um acordo com o lorde: resgatar a Princesa Fiona de uma torre guardada por um dragão, em troca da expulsão das criaturas.',
            data_lancamento: '22/06/2001'
        },  
        {
            nome: 'Piratas Do Caribe: A Maldição Do Pérola Negra',
            sinopse:'O pirata Jack Sparrow une forças com o jovem ferreiro Will Turner para resgatar Elizabeth Swann, a filha do governador. Eles logo descobrem que o raptor, Capitão Barbossa, e sua tripulação foram condenados por uma antiga maldição asteca a viverem eternamente como esqueletos',
            data_lancamento: '09/07/2003'
        }
    ];
    res.json(filmes)
});

app.get('/celulares', (req, res) => {
    const celulares = [
        {
            nome: 'Motorola DynaTAC 8000x',
            marca: 'Motorola',
            data_lancamento: '06/03/1983'
        },
        {
            nome: 'Samsung Galaxy S24 Ultra',
            marca: 'Samsung',
            data_lancamento: '17/01/2024    '
        }
    ];
    res.json(celulares)
});

app.get('/jogos', (req, res) => {
    const jogos = [
        {
            nome: 'Minecraft',
            data_lancamento: '17/05/2011'
        },
        {
            nome: 'Roblox',
            data_lancamento: '01/09/2006'
        }
    ];
    res.json(jogos)
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
})