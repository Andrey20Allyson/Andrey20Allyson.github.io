import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}