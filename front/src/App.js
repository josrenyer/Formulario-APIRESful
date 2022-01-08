import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Formulario from "./Componentes/Formulario.js";
import Personas from "./Componentes/Personas.js";

function App() {


  return(
    <Routes>
      <Route exact path="/" element={<Formulario/>}/>
      <Route exact path="/Data" element={<Personas/>}/>
    </Routes>
  )
}

export default App;
