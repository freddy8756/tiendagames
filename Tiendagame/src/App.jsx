import { useState } from "react";
import Encabezado from "./Encabezado";
import Tarjeta from "./Tarjeta";
import Tarjet from "./Tarjet";
import Acercade from "./Acercade";
import Dueño from "./Dueño";
import './App.css';

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div className="ini">
      <Encabezado cambiarvista={setVista} /> 
      <Tarjeta vista={vista}/>
      <Acercade/>
      <Dueño/>
      <Tarjet/>
    </div>
  );
}

export default App;
