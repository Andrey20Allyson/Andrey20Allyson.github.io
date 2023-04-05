import React from 'react';
import './index.css';
import defaultParser from '../../utils/react-node-parser';
import { Emogis } from '../../utils/text';

export default function Experience() {
  return (
    <div className='exp-body'>
      <h3 className='exp-title'>
        {`${Emogis.CONSTRUCTION_SIGN} Ops! O conteúdo ainda não existe! ${Emogis.CONSTRUCTION_SIGN}`}
      </h3>
      {defaultParser.parse('Talvez no *futuro* apareça algo aqui.')}
    </div>
  )
} 