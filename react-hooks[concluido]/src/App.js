import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import * as validacoes from "./models/validarCadastro";

import {Container, Typography } from "@material-ui/core"
import ValidacoesDeCadastro from "./contexts/ValidacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesDeCadastro.Provider value={validacoes}>
         <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={validacoes} />
        </ValidacoesDeCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados); 
}

export default App;
