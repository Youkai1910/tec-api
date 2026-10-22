'use strict';
//importando o express (instalado via terminal)
import express from 'express';
import{ler, inserir, lerUm, atualizar} from './src/aluno.js';
const app = express();
const porta = 3000;
 //habilitando o express para trabalhar com formato JSON
app.use(express.json());
//habilitando o express para trabalhar com formato url encoded (formulario)
app.use(express.urlencoded({extended : true}));
/* ROTAS*/
// Configurando rota para  o início da aplicação
app.get('/', function(req, res) {
    res.send('API de alunos com nodeJ, express e MySQL');
       
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
    res.send('Deletando um aluno');
})
/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
    
});