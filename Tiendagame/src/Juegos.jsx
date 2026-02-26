import "./Juegos.css";
import galaga from './assets/galaga.jpg';
import centipede from './assets/centipede.png';
import asteroids from './assets/asteroid.png';
import dokeykong from './assets/Donkeykong.jpg';
import space from './assets/space.png';
import street from './assets/street.jpg';
import frooger from './assets/Frooger.jpg';
import digdug from './assets/digdug.jpg';
function Juegos() {
  const sedes = [
    { id: 1, name: "Galaga", descripcion: "juego de matar insectos", src: galaga},
    { id: 2, name: "Centipede", descripcion: "juego de matar gusanos", src: centipede },
    { id: 3, name: "Asteroids", descripcion: "juego de destruir asteroides", src: asteroids },
    { id: 4, name: "Donkey Kong", descripcion: "Acabar con un mono", src: dokeykong },
    { id: 5, name: "Space Invaders", descripcion: "Defender la tierra de los invasores", src: space },
    { id: 6, name: "Street Fighter", descripcion: "Luchar contra otros personajes", src: street },
    { id: 7, name: "Frooger", descripcion: "Ayuda a un sapo a cruzar la calle y el río", src: frooger },
    { id: 8, name: "Dig Dug", descripcion: "Cavar túneles y derrotar a los enemigos", src: digdug },
  ];

  return (
    <div className="Juegos">
        {sedes.map((sede) => (
          <Tarjeta key={sede.id} src={sede.src} name={sede.name} descripcion={sede.descripcion} />
        ))}
      </div>
    
  );
}

function Tarjeta({ src, name, descripcion }) {
  return (
    <div className="Juegos-card">
      <h3>{name}</h3>
      <p>{descripcion}</p>
      <img src={src} alt={name} />
    </div>
  );
}

export default Juegos;