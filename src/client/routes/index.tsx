import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useDevLocation from "../hooks/useDevLocation";
import { FlexibleLayout } from "../layout";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Education from "../pages/Educations";
import Experience from "../pages/Experience";
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills";

export function Router() {
  return (
    <BrowserRouter window={window}>
      <FlexibleLayout>
        <AppRoutes />
      </FlexibleLayout>
    </BrowserRouter>
  )
}

export function AppRoutes() {
  useDevLocation();

  return (
    <Routes>
      <Route element={<About />} path='/' />
      <Route element={<Skills />} path='/skills' />
      <Route element={<Experience />} path='/experience' />
      <Route element={<Education />} path='/education' />
      <Route element={<Contacts />} path='/contacts' />
      <Route element={<NotFound />} path='*' />
    </Routes>
  )
}