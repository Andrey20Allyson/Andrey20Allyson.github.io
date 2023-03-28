import React, { useEffect, useState } from "react";
import './index.css'

export function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
    </svg>
  )
}

export function CopyIcon() {
  return (
    <svg viewBox="0 0 512 512">
      <path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 352c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224z" />
    </svg>
  )
}

export interface CopyButtonProps {
  data?: string;
  color?: string;
  className?: string;
}

export default function CopyButton(props: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  let className = "copybtn-body";

  async function clickHandler(ev: React.MouseEvent<HTMLDivElement>) {
    try {
      await navigator.clipboard.writeText(props.data ?? '');
      if (!copied) setCopied(true);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setTimeout(() => setCopied(false), 5000);
  }, [copied]);

  if (copied) className += ' copied';

  if (props.className) className += ' ' + props.className;

  return (
    <div
      onClick={clickHandler}
      className={className}>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </div>
  )
}