const uploadDeArquivos = require('../infraestrutura/arquivos/uploadDeArquivos');
const conexao = require('../infraestrutura/database/conexao.js');

class Pets {

    adiciona(pet, res) {
        const sql = 'INSERT INTO Pets SET ?';
        uploadDeArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {

            if (erro) {
                res.status(400).json(erro);
            } else {

                const novoPet = {nome: pet.nome, imagem: novoCaminho};
    
                conexao.query(sql, novoPet, (err) => {
                    if (erro) {
                        res.status(400).json(err);
                    } else {
                        res.status(200).json(novoPet);
                    }
                })
            }

        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Pets';

        conexao.query(sql, (err, resultado) => {
            if (err) {
                res.status(500).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        })
    }

    apaga(id, res) {
        const sql = `DELETE FROM Pets Where id=${id}`;

        conexao.query(sql, (err, resultado) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(resultado);
            }
        })
    }
}

module.exports = new Pets();