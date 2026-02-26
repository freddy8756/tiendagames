import "./Tienda.css";
import Mapa from "./Mapa";

function Tienda() {
  const sedes = [
    { id: 1, name: "Arcade", descripcion: "21 de marzo", lat: 20.270213, lng: -97.954288,  },
    { id: 2, name: "Gamebay", descripcion: "Calle Alvarado", lat: 20.274353, lng: -97.958872},
    { id: 3, name: "Gamezone", descripcion: "Calle Florida", lat: 20.275731, lng: -97.957807 }
  ];

  return (
    <div className="Tienda">
        {sedes.map((sede) => (
          <Tarjeta key={sede.id} {...sede} />
        ))}
    </div>
  );
}

function Tarjeta({ name, descripcion, lat, lng }) {
  return (
    <div className="Tienda-card">
      <h3>{name}</h3>
      <p>{descripcion}</p>
      <p> {lat}, {lng}</p>
      <Mapa lat={lat} lng={lng} />
    </div>
  );
}

export default Tienda;
