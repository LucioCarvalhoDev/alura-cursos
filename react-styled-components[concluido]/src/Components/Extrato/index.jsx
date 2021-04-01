import React from 'react';
import Items from '../Items';
import { Botao, Box } from '../UI';

import { extratoLista } from './../../info';

export default function Extrato() {

  return (
    <>
      <Box>

        {extratoLista.updates.map(({ id, type, from, value, date }) => {
            return (
            <Items 
              key={id} 
              type={type} 
              from={from} 
              value={value} 
              date={date}
            />);
          })}

          <Botao>Ver Mais</Botao>
      </Box>
    </>
  );
}