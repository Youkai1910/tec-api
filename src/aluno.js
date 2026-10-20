'use strict'
import conexao from "./banco.js"; //importando a conexão com o banco de dados
// Função ler: vai ler os alunos do banco de dados (no momento inicial não temos nenhum);

function ler(res){
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados)=> {
         
    })
}