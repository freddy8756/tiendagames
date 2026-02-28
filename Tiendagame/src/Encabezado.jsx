import PropTypes from "prop-types";
import Logo from "./assets/logo.jpg";
import Clima from './Clima.jsx';
import './Encabezado.css';
import youtube from './assets/imagen5.jpg';
import facebook from './assets/imagen6.jpg';
import watsapp from './assets/imagen7.jpg';
import ticktok from './assets/tiktok.jpg';
import instagram from './assets/Imagen8.jpg'
function Encabezado({ cambiarvista }) {
  return (
    <div className="encabezadoDiv">
      <Logotipo />
      <Menu cambiarvista={cambiarvista} />
      <Clima />
    </div>
  );
}

function Logotipo() {
  return (
    <div className="logodiv">
      <img src={Logo} alt="logo" />
      <h1 className="tienda">Bienvenido a la Tienda de juegos</h1>
      <div className="redesdiv">
        <ul>
          <li><img src={ticktok} alt="tiktok" /></li>
          <li><img src={youtube} alt="youtube" /></li>
          <li><img src={facebook} alt="facebook" /></li>
          <li><img src={watsapp} alt="watsapp" /></li>
          <li><img src={instagram} alt="instagram" /></li>
        </ul>
      </div>
    </div>
  );
}


function Menu({ cambiarvista }) {
  return (
    <div className="menudiv">
      <ul>
        <li><a onClick={() => cambiarvista("Inicio")}>Inicio</a></li>
        <li><a onClick={() => cambiarvista("Productos")}>Productos</a></li>
        <li><a onClick={() => cambiarvista("Contacto")}>Contacto</a></li>
        <li><a onClick={() => cambiarvista("Tienda")}>Tiendas</a></li>
        <li><a onClick={() => cambiarvista("Juegos")}>Más juegos</a></li>
      </ul>
    </div>
  );
}


Menu.propTypes = {
  cambiarvista: PropTypes.func.isRequired,
};

Encabezado.propTypes = {
  cambiarvista: PropTypes.func.isRequired,
};

export default Encabezado;
