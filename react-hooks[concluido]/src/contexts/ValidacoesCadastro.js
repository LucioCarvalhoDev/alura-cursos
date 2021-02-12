import React from 'react';

const ValidacoesDeCadastro = React.createContext({
    cpf: defaultAction,
    nome: defaultAction,
    email: defaultAction
});

function defaultAction(dados) {
    console.log(dados);
    return { valido: true, texto: ""};
}

export default ValidacoesDeCadastro;