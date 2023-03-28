import React from "react";
import Education, { EducationProps } from "./Education";
import './index.css';

type EducationType = {
  props: EducationProps
};

export interface EducationListProps {
  title?: string;
  children: EducationType | EducationType[];
}

export default function EducationList(props: EducationListProps) {
  const children: React.ReactNode[] = [];

  if (props.children instanceof Array) {
    let key = 0;
    for (const child of props.children) {
      const element = <Education key={key++} {...child.props}/>;

      children.push(element);
    }
  } else {
    children.push(<Education {...props.children.props}/>);
  }

  return (
    <div className="education-list-body">
      <h2>{props.title ?? 'Formação'}</h2>
      <ul className="education-list-ul">{children}</ul>
    </div>
  )
}