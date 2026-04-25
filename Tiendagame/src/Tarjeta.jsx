import mario from './assets/mario.jpg';
import Ralp from './assets/Ralp.jpg';
import pacman from './assets/pacman.png';
import Productos from './Productos';
import Usuarios from './Usuariosdetien';
import Contacto from './Contacto';  
import Tienda from './Tienda'
import Juegos from './Juegos';
import Usuarios from './Usuarios';
import "./Tarjeta.css";
import Iniciosesion from './Iniciosesion';
import PropTypes from 'prop-types';
function ContenedorTargetas( {vista} ) {
  const vistas = {
    Inicio: <Inicio />,
    Usuarios: <Usuarios />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Iniciosesion: <Iniciosesion chVista={vista}/>,
    Usuarios: <Usuarios />,
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
<<<<<<< HEAD
      { vista !== "Productos" && vista !== "Contacto" && vista !== "Tienda" && vista !== "Juegos" && vista !== "Usuarios" && vista !== "Iniciosesion" &&  (
=======
      { vista !== "Usuarios" && vista !== "Productos" && vista !== "Contacto" && vista !== "Tienda" && vista !== "Juegos" && (
>>>>>>> aaddeb34ed897cb39bada441f6b5a308a4b81994
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
