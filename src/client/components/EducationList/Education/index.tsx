import React from "react";
import defaultParser from "../../../utils/react-node-parser";
import './index.css';

export enum EducationModalities {
  PRESENTIAL,
  ONLINE,
  SEMI_PRESENTIAL,
}

type EducationModalitiesMap = {
  [k in EducationModalities]: string;
};

const modalities: EducationModalitiesMap = {
  [EducationModalities.ONLINE]: 'Online',
  [EducationModalities.PRESENTIAL]: 'Presencial',
  [EducationModalities.SEMI_PRESENTIAL]: 'Semi Presencial',
};

export class MonthAndYear {
  private static _monthStrings = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  year: number;
  month: number;

  constructor(month: number = 0, year: number = 0) {
    this.month = month;
    this.year = year;
  }

  toString() {
    return `${MonthAndYear.monthToString(this.month)} de ${this.year}`
  }

  static monthToString(month: number) {
    return this._monthStrings[month % this._monthStrings.length];
  }
}

export interface EducationProps {
  title: string;
  desc: string;
  modality?: EducationModalities;
  start: MonthAndYear;
  finish?: MonthAndYear;
  imgSrc?: string;
  index?: string;
}

export default function Education(props: EducationProps) {
  console.log(props.modality)

  return (
    <li className='education-li'>
      <h3>{props.title}</h3>
      <p>{defaultParser.parse(props.desc)}</p>
      <p>
        Modalidade: <strong>
          {
            props.modality !== undefined
              ? modalities[props.modality]
              : modalities[EducationModalities.ONLINE]
          }
        </strong>
      </p>
      <p>
        Inicado em <strong>
          {props.start.toString()}
        </strong>
      </p>
      {props.finish ? (
        <p>Finalizado em <strong>{props.finish.toString()}</strong></p>
      ) : (
        <p>
          <strong>
            [Em andamento]
          </strong>
        </p>
      )}
      {props.imgSrc && (
        <div className='education-instituition-img-div'>
          <img src={props.imgSrc} className='education-instituition-img' />
        </div>
      )}
    </li>
  )
}