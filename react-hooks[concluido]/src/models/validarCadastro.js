function cpf(cpf) {

  function validaDigitoVerificador(cpf) {

    if (["11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"].includes(String(cpf))) {
      return false;
    }

    let testePrimeiroDigitoVerificador = cpf
      .split("")
      .splice(0, 9)
      .map((algarismo, idx) => {
        return [algarismo, 10 - idx]
      })
      .reduce((acc, cur) => {
        return acc += cur[0] * cur[1];
      }, 0);

    const primeiroDigitoVerificador = (11 - (testePrimeiroDigitoVerificador % 11) >= 10) ? 0 : (11 - (testePrimeiroDigitoVerificador % 11));

    if (primeiroDigitoVerificador != cpf[9]) return false;

    let testeSegundoDigitoVerificador = cpf
      .split("")
      .splice(0, 10)
      .map((algarismo, idx) => {
        return [algarismo, 11 - idx]
      })
      .reduce((acc, cur) => {
        return acc += cur[0] * cur[1];
      }, 0);

    const segundoDigitoVerificador = (11 - (testeSegundoDigitoVerificador % 11) >= 10) ? 0 : (11 - (testeSegundoDigitoVerificador % 11));

    if (segundoDigitoVerificador != cpf[10]) return false;

    return true;
  }

  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else if (!validaDigitoVerificador(cpf)) {
    return { valido: false, texto: "CPF incorreto" }
  }
  return { valido: true, texto: "" }
}


function senha(senha) {
  if ((senha.length < 8) || (senha.length > 72)) {
    return { valido: false, texto: "Senha deve ter entre 8 e 72 caracteres" };
  }
  if (!/[0-9]/.test(senha)) {
    return { valido: false, texto: "Senha deve conter pelo menos um numero" };
  }
  if (!/[a-z]/.test(senha)) {
    return { valido: false, texto: "Senha deve conter pelo menos uma letra minuscula" };
  }
  if (!/[A-Z]/.test(senha)) {
    return { valido: false, texto: "Senha deve conter pelo menos uma letra maiuscula" };
  }
  return { valido: true, textp: "" };
}

function email(email) {
  if (!/.*@.*/.test(email)) return { valido: false, texto: "Insira um email valido"};
  return { valido: true, texto: ""}
}

export { cpf, senha, email };