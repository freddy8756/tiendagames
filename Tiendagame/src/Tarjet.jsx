import "./Tarjet.css";

function Tarjet() {
  return (
    <div className="tsacs">
      <Doc />
      <Dic />
    </div>
  );
}

function Doc() {
  return (
    <div className="deoc">
      <h2>Esta es una pagina de videojuegos antiguos</h2>
    </div>
  );
}

function Dic() {
  return (
    <div className="ddic">
      <h2 className="dera">Es momento de revivir ese lado infantil</h2>
    </div>
  );
}

export default Tarjet;
