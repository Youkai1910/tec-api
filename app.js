//importando o express (instalado via terminal)
import express from 'express';
const app = express();
const porta = 3000;
 
/* ROTAS*/
// Configurando rota para  o início da aplicação
app.get('/', function(req, res) {
    res.send('API de alunos com nodeJ, express e MySQL');
       
});
//ROTA visualizar todos os alunos
app.get('/alunos',(req, res) => {
     res.send(`Dados de todos os alunos`);
});
//ROTA para visualizar UM aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Dados de um aluno qualquer');
});
// Rota POST para inserir um aluno 
app.post('/alunos', (req, res) => {
    res.send('Cadastrando um aluno');
});

// rota para Atualizar todos os dados de um aluno 
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando o Cadastro do aluno');
});
// rota para atualizar alguns  dos dados de um aluno
app.patch('/alunos/:id', (req, res) => {
    res.send('Atualizando alguns dados ');
});
// rota para deletar um aluno
app.delete('/alunos/:id', (req, res) => {
    res.send('Deletando um aluno');
})
/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
    
});