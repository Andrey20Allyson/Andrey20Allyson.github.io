import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavitagionBar";
import { NavigationButton } from "../components/NavitagionBar/NavigationButton";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Education from "../pages/Educations";
import Experience from "../pages/Experience";
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills";
import './index.css';

export default function Router() {
  return (
    <BrowserRouter window={window}>
      <AppLayout />
    </BrowserRouter>
  )
}

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const href = sessionStorage.getItem('DEV_ACTUAL_HREF');
    if (href && href !== location.pathname) {
      navigate(href);
    }
  }, []);

  return (
    <div className="router-body">
      <NavigationBar>
        <NavigationButton title='Sobre' href='/' onNavigate={navigate} />
        <NavigationButton title='Skills' href='/skills' onNavigate={navigate} />
        <NavigationButton title='Experiência' href='/experience' onNavigate={navigate} />
        <NavigationButton title='Formação' href='/education' onNavigate={navigate} />
        <NavigationButton title='Contatos' href='/contacts' onNavigate={navigate} />
      </NavigationBar>
      <div className="router-content">
        <Routes>
          <Route element={<About />} path='/' />
          <Route element={<Skills />} path='/skills' />
          <Route element={<Experience />} path='/experience' />
          <Route element={<Education />} path='/education' />
          <Route element={<Contacts />} path='/contacts' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </div>
  )
}