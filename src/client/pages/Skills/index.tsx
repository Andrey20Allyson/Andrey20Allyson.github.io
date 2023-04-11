import React from "react";
import { SkillList } from "../../components/SkillList";
import { Skill } from "../../components/SkillList/Skill";
import './index.css';

export default function Skills() {
  return (
    <SkillList>
      <Skill title='BackEnd' paragraphs={[
        'Contrução de serviços web com *NodeJS*, utilizando frameworks como *ExpressJS*, *Socket.io* e banco de dados *MySQL*.',
        'Automação de testes com o framework *Vitest*, com o intuíto de fornecer um software seguro e escalável.',
      ]} />
      <Skill title='FrontEnd' paragraphs={[
        'Utilização de *React* para a criação de interfaces altamente escaláveis (Inclusive, este currículo foi feito com *React*).',
        'Base do desenvolvimento web *HTML*, *CSS*, *JavaScript*.',
      ]} />
      <Skill title='FullStack' paragraphs={[
        'Desenvolvimento FullStack utilizando *NextJS* para desenvolver websites com renderização tanto no _server-side_ quanto no _client-side_.'
      ]} />
      <Skill title='APIs' paragraphs={[
        'Utilização dos serviços que o *Google Cloud* disponibiliza na criação de softwares.',
        'Uso dos serviços da *Firebase* na criação de apps com um _*"backend as a service"*_',
        'Criação de soluções utilizando a API do *Google Drive*.',
      ]} />
      <Skill title='Mobile' paragraphs={[
        'Desenvolvimento de aplicações simples utilizando *React Native* e a plataforma *Expo*.'
      ]} />
    </SkillList>
  )
}