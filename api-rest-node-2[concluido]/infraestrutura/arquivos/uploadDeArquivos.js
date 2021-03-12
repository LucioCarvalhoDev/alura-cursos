const fs = require('fs');
const path = require('path');

module.exports = function uploadDeArquivos(caminho, nomeDoArquivo, callback) {

    const tiposValidos = ['.jpg', '.jpeg', '.png'];
    const tipo = path.extname(caminho);

    const tipoEhValido = tiposValidos.indexOf(tipo) != -1;

    if (tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
    
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => {
                callback('', novoCaminho);
            })
    } else {
        callback('tipo de arquivo não suportado');
    }

}
