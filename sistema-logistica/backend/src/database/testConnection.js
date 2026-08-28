const connection = require("./connection");

async function testarConexao() {
    try {
        const conexao = await connection.getConnection();

        console.log("Conectado ao banco de dados com sucesso!");

        conexao.release();
    } catch (erro) {
        console.error("Erro ao conectar ao banco:", erro.message);
    }
}

testarConexao();