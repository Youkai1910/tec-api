'use strict';
import conexao from "./banco.js"; //importando a conexão com o banco de dados
// Função ler: vai ler os alunos do banco de dados (no momento inicial não temos nenhum);

function ler(res){
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados)=> {
        //verificando se há erro, e caso positivo define o status para 400(bad Request)
        //e apresenta o código do erro no format json
         if(erro){
            res.status(400).json(erro.code);
            return;
         }
         // verifica se tem registro no banco de dados, caso não tenha, define status 
         //para 204(sem conteúdo)
         if(resultados === 0){
            res.status(204).end();
            return;
         }
         // define o status como 200(OK) e exibe os resultados
         res.status(200).json(resultados);
    })
}

// INSERINDO alunos no banco de dados 
function inserir(aluno, res){
    // O MYSQL2 com o "SET ?" faz com que o mysql 
    //entenda que todos os dados recebidos serão atribuidos na ordem enviada, aos campos da tabela alunos.
    const sql = "INSERT INTO alunos SET ?"; 

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            // além de responder com status 201, adicionamos uma mensagem amigavel para que o usuário foi inserido no banco de dados 
            res.status(201).json({"status" : "aluno inserido"});
        }
    })
}

export {ler, inserir};