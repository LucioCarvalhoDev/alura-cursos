import React, { useState } from 'react';

function useErros(validacoes) {

    const defaultErros = initErros(validacoes);

    const [erros, setErros] = useState(defaultErros);

    function validarCampo(evento) {
        const { name, value } = evento.target;
        setErros({ ...erros, [name]: validacoes[name](value) });
    }

    function podeEnviar(erros) {
        for (const campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampo, podeEnviar];
}

function initErros(validacoes) {
    const erros = {};
    for (const campo in validacoes) {
        erros[campo] = { valido: true, texto: "" }
    }
    return erros;
}

export default useErros;