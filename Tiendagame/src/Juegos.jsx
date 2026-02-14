import "./Juegos.css";
import galaga from './assets/galaga.jpg';
import centipede from './assets/centipede.png';
import asteroids from './assets/asteroid.png';
function Juegos() {
  const sedes = [
    { id: 1, name: "Galaga", descripcion: "juego de matar insectos", src: galaga},
    { id: 2, name: "Centipede", descripcion: "juego de matar gusanos", src: centipede },
    { id: 3, name: "Asteroids", descripcion: "juego de destruir asteroides", src: asteroids },
  ];

  return (
    <div className="sucursaless">
      <div className="classSedes">
        {sedes.map((sede) => (
          <Tarjeta key={sede.id} src={sede.src} name={sede.name} descripcion={sede.descripcion} />
        ))}
      </div>
    </div>
  );
}

function Tarjeta({ src, name, descripcion }) {
  return (
    <div className="sucursal">
      <h3>{name}</h3>
      <p>{descripcion}</p>
      <img src={src} alt={name} />
    </div>
  );
}

export default Juegos;