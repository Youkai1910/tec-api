'use strict';
//importando o express (instalado via terminal)
import express from 'express';
import cors from 'cors';
import{ler, inserir, lerUm, atualizar, excluir} from './src/aluno.js';
const app = express();
const porta = process.env.PORT || 3000;
 //habilitando o express para trabalhar com formato JSON
app.use(express.json());
//habilitando o express para trabalhar com formato url encoded (formulario)
app.use(express.urlencoded({extended : true}));
//habilitando CORS
app.use(cors());
/* ROTAS*/
// Configurando rota para  o início da aplicação
app.get('/', function(req, res) {
    //res.redirect('https://youkai1910-3949031.postman.co/documentation/59142754-5135e6e5-fc2d-4cda-bd4e-4dd9c3be0b22/publish?workspaceId=bdffaa34-13b9-4752-844b-fe33f5ce8965&authFlowId=9f5ebe33-d23f-44e5-8fb0-67f3b2e2f6d4&_pmt=pmMTc5MjY3OTIwMzY4NQ%253D%253D%257CPM.MjAyNi0xMC0yMlQxNDoyNjo0My42ODVa');
    res.send('API de alunos com nodeJS, express e MySQL');
       
});
//ROTA visualizar todos os alunos
app.get('/alunos',(req, res) => {
     //res.send(`Dados de todos os alunos`);
     ler(res);
});
//ROTA para visualizar UM aluno
app.get('/alunos/:id', (req, res) => {
   // res.send('Dados de um aluno qualquer');

   // requisição do parâmetro ID
   const id = parseInt(req.params.id);
   lerUm(id, res);
});
// Rota POST para inserir um aluno 
app.post('/alunos', (req, res) => {
    //res.send('Cadastrando um aluno');

    //capturando os dados a partir do corpo da requisição(req)
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// rota para Atualizar todos os dados de um aluno 
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando o Cadastro do aluno');
});
// rota para atualizar alguns  dos dados de um aluno
app.patch('/alunos/:id', (req, res) => {
    //res.send('Atualizando alguns dados ');
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});
// rota para deletar um aluno
app.delete('/alunos/:id', (req, res) => {
    //res.send('Deletando um aluno');
    const id = parseInt(req.params.id);
    excluir(id, res);
})
/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
    
});