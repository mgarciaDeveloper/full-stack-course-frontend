import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Sucesso from './Pages/Sucesso'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



function App() {
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sucesso' element={<Sucesso />} />
        </Routes>
      </header>
    </div>
  </BrowserRouter>
}

export default App;
