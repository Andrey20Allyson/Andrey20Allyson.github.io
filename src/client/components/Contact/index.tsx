import React from "react";
import CopyButton from "../CopyButton";
import './index.css'

export interface ContactProps {
  title: string;
  contact?: string;
  isLink?: boolean;
  iconUrl?: string;
}

const hrefRegExp = /^https?:\/\/.*$/;

export default function Contact(props: ContactProps) {
  return (
    <div className="contact-body">
      <h3 className="contact-title" >{props.title}</h3>
      <div className="contact-footer">
        {props.iconUrl && <img className="contact-img" src={props.iconUrl} />}
        {props.contact && (hrefRegExp.test(props.contact)
          ? <a className="contact-href contact-text" href={props.contact}>Ir para o {props.title}</a>
          : <p className="contact-text">{props.contact}</p>
        )}
        <CopyButton
          className="contact-copy"
          data={props.contact}
        />
      </div>
    </div>
  )
}