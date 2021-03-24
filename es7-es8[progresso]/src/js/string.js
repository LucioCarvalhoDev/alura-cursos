const nome = 'Javerson';
const sobrenome = 'Dantas';

const nomeCompleto1 = nome + ' ' + sobrenome; //concatenacao
const nomeCompleto2 = `${nome} ${sobrenome}`; //templateString

//stringPadding
const nomeCompleto3 = sobrenome.padStart(nome.length + sobrenome.length, nome);

console.log(nomeCompleto3)

const cartao = '4890';

console.log(cartao.padStart(19, '**** '))