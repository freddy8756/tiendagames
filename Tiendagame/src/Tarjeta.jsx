import mario from './assets/mario.jpg';
import Ralp from './assets/Ralp.jpg';
import pacman from './assets/pacman.png';
import Acercade from './Acercade';
import Productos from './Productos';
import Contacto from './Contacto';  
import Tienda from './Tienda'
import Juegos from './Juegos';
import "./Tarjeta.css";
import PropTypes from 'prop-types';

function ContenedorTargetas({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <Acercade />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Tienda: <Tienda />,
    Juegos: <Juegos />
  };

  return (
    <div className="tarjetadiv">
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function Inicio() {
  return (
    <>
      
      
    </>
  );
}


ContenedorTargetas.propTypes = {
  vista: PropTypes.string.isRequired,
};

function Tarjeta({ vista }) {
  const zona =[
    { id: 1, name: "Mario", descripcion: "Juego inolvidable", src: mario },
    { id: 2, name: "Ralp el demoledor", descripcion: "Especialista en reparar", src: Ralp },
    { id: 3, name: "Pacman", descripcion: "come fantasmas", src: pacman }
  ]
  return (
    <div className="inicio">
      {vista !== "AcercaDe" && vista !== "Productos" && vista !== "Contacto" && vista !== "Tienda" && vista !== "Juegos" && (
        <>
          {zona.map((item) => (
            <div key={item.id} className="inicio-card">
              <h3>{item.name}</h3>
              <p>{item.descripcion}</p>
              <img src={item.src} alt={item.name} />
            </div>
          ))}
        </>
      )}
      
      <ContenedorTargetas vista={vista} />
    </div>
  );
}

export default Tarjeta;
