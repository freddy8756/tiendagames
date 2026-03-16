import { useState } from "react";
import Encabezado from "./Encabezado";
import Tarjeta from "./Tarjeta";
import Tarjet from "./Tarjet";
import Acercade from "./Acercade";
import Dueño from "./Dueño";
import './App.css';
import { AuthProvider } from "./Authcontex";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div className="ini">
      <AuthProvider>
        <Encabezado cambiarvista={setVista} /> 
      <Tarjeta vista={vista}/>
      </AuthProvider>
      <Acercade/>
      <Dueño/>
      <Tarjet/>
    </div>
  );
}

export default App;
