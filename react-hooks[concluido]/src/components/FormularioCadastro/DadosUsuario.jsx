import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import validacoesDeCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
  
function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  const validacoes = useContext(validacoesDeCadastro);
  const [erros, validarCampo, podeEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        podeEnviar(erros) && aoEnviar({ email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          validarCampo(event);
        }}
        error={!erros.email.valido}
        helperText={erros.email.texto}
        name="email"
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value);
          validarCampo(evento);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
