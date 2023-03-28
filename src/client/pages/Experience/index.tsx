import React from 'react';
import './index.css';
import defaultParser from '../../utils/react-node-parser';

const CONSTRUCTION_SIGN_EMOGI = '\uD83D\uDEA7';

export default function Experience() {
  return (
    <div className='exp-body'>
      <h3 className='exp-title'>
        {`${CONSTRUCTION_SIGN_EMOGI} Ops! O conteúdo ainda não existe! ${CONSTRUCTION_SIGN_EMOGI}`}
      </h3>
      {defaultParser.parse('Talvez no *futuro* apareça algo aqui.')}
    </div>
  )
} 