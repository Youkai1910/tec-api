'use strict'

import mysql2 from 'mysql2';

const cnexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'senacpenha',
    database : 'escola-api'
});
//conexao.connect
conexao.connect(erro => {
    if(erro){
        console.error(`Erro ao conectar:${erro.message}`); //exibindo menssagem de erro amigavel
    }else{
        console.log('Banco de dados conectado com sucesso!');
        
    }
});
// exportando a conexão com banco de dados
export default conexao;
