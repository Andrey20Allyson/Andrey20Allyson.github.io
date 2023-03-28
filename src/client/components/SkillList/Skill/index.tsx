import React, { ReactNode } from "react";
import defaultParser from "../../../utils/react-node-parser";
import './index.css';

export interface SkillProps {
  title: string;
  paragraphs?: string[];
}

export default function Skill(props: SkillProps) {
  const paragraphs: JSX.Element[] = [];

  if (props.paragraphs) for (let i = 0; i < props.paragraphs.length; i++) {
    const children = defaultParser.parse(props.paragraphs[i]);

    paragraphs.push(<p key={i}>{children}</p>)
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <ul>
        {paragraphs}
      </ul>
    </li>
  )
}