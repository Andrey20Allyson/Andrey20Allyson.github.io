import React from "react";
import { AnimatedText } from "../../components/AnimatedText";
import defaultParser from "../../utils/react-node-parser";
import './index.css';

export default function Home() {
  return (
    <>
      <h1>Andrey Allyson Viana Gomes</h1>
      <AnimatedText
        Component={props => <h2 className="animated-skills" {...props}/>}
        baseText='Um %s_'
        texts={[
          'FrontEnd!',
          'BackEnd!',
          'Mobile Dev!',
          'FullStack!'
        ]} />
      <h2>Sobre</h2>
      <p>
        {defaultParser.parse('Programador *Full-Stack* com conhecimentos em Typescript/Javascript tanto no *Front-End* quanto no *Back-End* com *NodeJS*.')}
      </p>
      <p>
        {defaultParser.parse('Também desenvolve aplicativos mobile para *Android* e *IOS* utilizando *React Native* com *Expo*.')}
      </p>
    </>
  );
}