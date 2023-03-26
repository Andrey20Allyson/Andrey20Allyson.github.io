import React from "react";
import NavigationBar from "../components/NavitagionBar";
import NavigationButton from "../components/NavigationButton";
import './Home.css'

export default function Home() {
  return (
    <div className="home-root">
      <div className="home-body">
        <NavigationBar>
          <NavigationButton title='Info' selected />
          <NavigationButton title='Skills' />
          <NavigationButton title='Experiência' />
          <NavigationButton title='Formação' />
          <NavigationButton title='Contatos' />
        </NavigationBar>
        <div className="home-article">
          <h1>Andrey Allyson Viana Gomes</h1>
          <h2>Sobre</h2>
          <p>Programador <strong>Full-Stack</strong> com conhecimentos em Typescript/Javascript tanto no <strong>Front-End</strong> quanto no <strong>Back-End</strong> com NodeJS.</p>
        </div>
      </div>
    </div>
  )
}