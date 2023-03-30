import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export interface NavigationButtonProps {
  title: string;
  selected?: boolean;
  href?: string;
  onPress?: () => void;
  onNavigate?: (href: string) => void;
}

export enum HoverState {
  INITIAL,
  HOVER_ON,
  HOVER_OFF,
}

export function NavigationButton(props: NavigationButtonProps) {
  const [hover, setHover] = useState(HoverState.INITIAL);
  // const navigate = useNavigate();

  const bodyClasses = [
    'navbtn-body',
  ]

  let selected = location.pathname === props.href ? true : props.selected;

  function onPressHandler(ev: React.MouseEvent<HTMLDivElement>) {
    props.onPress?.();

    if (props.href && !selected) {
      props.onNavigate?.(props.href);
    }
  }

  if (selected) {
    bodyClasses.push('selected');
  } else {
    bodyClasses.push('selectable');

    switch (hover) {
      case HoverState.HOVER_OFF:
        bodyClasses.push('hover-leave');
        break;
      case HoverState.HOVER_ON:
        bodyClasses.push('hover-enter');
        break;
    }
  }

  return (
    <div
      onMouseEnter={() => setHover(HoverState.HOVER_ON)}
      onMouseLeave={() => setHover(HoverState.HOVER_OFF)}
      className={bodyClasses.join(' ')}
      onClick={onPressHandler}>
      <p
        className='navbtn-title'>
        {props.title}
      </p>
    </div>
  )
}