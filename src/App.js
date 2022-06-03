// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './components/VendingMachine'
import Chips from './components/Chips';
import SourPatchKids from './components/SourPatchKids';
import Water from './components/Water';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<VendingMachine/>}>
        </Route>

        <Route exact path="/chips" element={<Chips/>}></Route>

        <Route exact path="/sour-patch-kids" element={<SourPatchKids />}></Route>

        <Route exact path="/water" element={<Water/>}></Route>
      </Routes>
       
        

      </BrowserRouter>
    </div>
  );
}

export default App;
