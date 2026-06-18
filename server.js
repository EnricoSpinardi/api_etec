//Enrico A. Spinardi
//importa express
const express = require('express');
const mysql = require('mysql2')
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static ('.'));

//conexão mysql
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'etec_api'
});

//conecta banco
conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar');

        return;
    }

    console.log('MySQL conectado')
})
//cria rota GET - Principal
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/status', (req, res)=> {    
    //retorna json
    res.json({
        mensagem: 'API Funcionando',
        curso: 'ETEC DS'
    });
});

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';

    conexao.query(sql, (erro, resultado) => {

        if(erro){
            
            console.log(erro);

            return;
        }
        
        res.json(resultado)
    });
});

//POST usuarios
app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;
    const cidade = req.body.cidade;

    const sql = 
    `INSERT INTO usuarios 
    (nome, idade, email, cidade)
     VALUES 
     (?, ?, ?, ?)`
     
     conexao.query(
         sql,
         [nome, idade, email, cidade],
         (erro, resultado) => {
             if (erro){
                 console.log(erro);
                 
                 return;
                };
                res.redirect('/');
                /* res.json({
                    mensagem: 'Usuário cadastrado com sucesso'
                }); */
            }
        );
    });
        

//Inicia servidor
app.listen(3000, () => {
    console.log("Servidor Funcionado");
});

//FAZER FORMULARIO HTML 

/*app.get('/produtos', (req, res) => {
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

