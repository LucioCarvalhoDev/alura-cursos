const executaQuery = require('./../infraestrutura/database/queries');

class Atendimento {
    adiciona(atendimento) {
        return executaQuery('INSERT INTO Atendimentos SET ?', atendimento);
    }

    lista() {
        return executaQuery('SELECT * FROM Atendimentos');
    }

    buscaPorId(id) {
        return executaQuery(`SELECT * FROM Atendimentos WHERE id-${id}`);
    }
}

module.exports = new Atendimento();