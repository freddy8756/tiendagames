import "./Producto.css"
import Palanca from "./assets/Palanca.jpg";
import Botones from "./assets/Botones.jpg";
import Pantalla from "./assets/Pantalla.jpg";
import Base from "./assets/Base.jpg";
import Pistabaile from "./assets/Pistabaile.jpg";
function Productos() {
  const sedes = [
    { id: 1, name: "Palanca", descripcion: "Para movimientos de game",src:Palanca},
    { id: 2, name: "Botones", descripcion: "Para hacer combos",src:Botones},
    { id: 3, name: "Pantalla", descripcion: "Zona para mostrar juegos",src:Pantalla},
    { id: 4, name: "base para componentes", descripcion: "Acabar con un mono",src:Base },
    { id: 5, name: "Pista de baile", descripcion: "Zona para bailar",src:Pistabaile},
    { id: 6, name: "Street Fighter", descripcion: "Luchar contra otros personajes" },
    { id: 7, name: "Frooger", descripcion: "Ayuda a un sapo a cruzar la calle y el río" },
    { id: 8, name: "Dig Dug", descripcion: "Cavar túneles y derrotar a los enemigos" },
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

export default Productos