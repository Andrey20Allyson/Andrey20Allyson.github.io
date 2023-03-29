import React, { useEffect, useMemo, useRef, useState } from "react";
import defaultParser from "../../../utils/react-node-parser";
import { ToggleButton } from "../../ToggleButton";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import './index.css';

export interface SkillProps {
  title: string;
  paragraphs?: string[];
}

export function OpenIcon() {
  return <AiOutlinePlusCircle size={25} />
}

export function CloseIcon() {
  return <AiOutlineMinusCircle size={25} />
}

export function stringToParsedJSX(paragraph: string, key: number) {
  return (
    <p key={key}>
      {defaultParser.parse(paragraph)}
    </p>
  )
}

export enum VisualisationState {
  INITIAL,
  HIDEN,
  VISIBLE,
}

export function getBodyHeight(visible: boolean) {
  if (visible) {

  }
}

function useHeight(ref: React.RefObject<Element>) {
  const [height, setHeight] = useState<number>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const element = ref.current;

    if (element) {
      let height = element.clientHeight;

      const observer = new ResizeObserver(entries => {
        for (const { target } of entries) {
          if (target === element && element.clientHeight !== height) {
            height = element.clientHeight;
            setHeight(height);
          }  
        }
      });

      observer.observe(element);
      
      setHeight(height);
    } else {
      setError('reference is null');
    }
  }, [ref]);

  if (error) {
    console.warn(error);
  }

  return height;
}

export function Skill(props: SkillProps) {
  const {
    title,
    paragraphs
  } = props;

  const [isBodyVisible, setBodyVisible] = useState(false);
  const innerBodyRef = useRef<HTMLUListElement>(null);
  const bodyMaxHeight = useHeight(innerBodyRef) ?? 0;

  const memoParagrapElements = useMemo(() => {
    return paragraphs
      ?.map(stringToParsedJSX)
      .flat()
  }, [paragraphs]);

  function toggleHandler(visible: boolean) {
    setBodyVisible(visible);
  }

  return (
    <li className='skill-container'>
      <div className='skill-header'>
        <h3>{props.title}</h3>
        <ToggleButton
          onToggle={toggleHandler}
          toggleoff={{
            Component: OpenIcon,
          }}
          toggleon={{
            Component: CloseIcon,
          }}
        />
      </div>
      <div
        style={{ height: isBodyVisible ? bodyMaxHeight : 0 }}
        className='skill-body'>
        <ul ref={innerBodyRef} >
          {memoParagrapElements}
        </ul>
      </div>
    </li>
  )
}