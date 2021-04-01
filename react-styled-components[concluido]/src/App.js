import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from './Components/GlobalStyle'
import SwitcherTema from "./Components/SwitcherTema";
import { BtnTema } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

function App() {

  const [tema, setTema] = useState(false);

  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <>
      <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema}/>
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
