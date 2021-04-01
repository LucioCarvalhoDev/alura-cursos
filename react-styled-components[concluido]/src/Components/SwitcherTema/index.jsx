import React from 'react';

import ThemeOn from './../../assets/images/themeOn.svg';
import ThemeOff from './../../assets/images/themeOff.svg';

import { BtnTema, Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt="Tema Claro"></Icone>
const escuro = <Icone src={ThemeOff} alt="Tema Escuro"></Icone>

export default (({tema}) => {
    return tema ? escuro : claro;
})