import React from "react"
import './index.css';

export interface NavigationBarProps extends React.PropsWithChildren {
  
}

export default function NavigationBar(props: NavigationBarProps) {
  return (
    <div className='nav'>
      {props.children}    
    </div>
  )
}