import React, { useState } from 'react';
import './index.css';

export interface NavigationButtonProps {
  title: string;
  selected?: boolean;
  onPress?: () => void;
}

export enum HoverState {
  INITIAL,
  HOVER_ON,
  HOVER_OFF,
}

export default function NavigationButton(props: NavigationButtonProps) {
  const [hover, setHover] = useState(HoverState.INITIAL);

  const bodyClasses = [
    'navbtn-body',
  ]

  switch (hover) {
    case HoverState.HOVER_OFF:
      bodyClasses.push('hover-leave');
      break;
    case HoverState.HOVER_ON:
      bodyClasses.push('hover-enter');
      break;
  };

  if (props.selected && hover !== HoverState.HOVER_ON) {
    bodyClasses.push('selected')
  }

  return (
    <div
      onMouseEnter={() => setHover(HoverState.HOVER_ON)}
      onMouseLeave={() => setHover(HoverState.HOVER_OFF)}
      className={bodyClasses.join(' ')}
      onClick={props.onPress}>
      <p
        className='navbtn-title'>
        {props.title}
      </p>
    </div>
  )
}