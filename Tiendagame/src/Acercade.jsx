import "./Acercade.css"
function Acercade() {
  return ( 
    <>
     <TarjetComponen />
    </>
  )
}
function TarjetComponen() {
  return (
    <div className="acercade">
      <h3>Acerca de</h3>
      <p>Esta es una tienda virtual dedicada a los juegos clásicos de arcade. 
        Ofrecemos una selección única de juegos retro que han marcado la historia del videojuego, gran parte de los juegos
         llegaron a ser la infancia de muchos de ustedes, algunos nos sacarn risas u otros fueron para andar con el grupito de amigos, 
         esperamos que les sea de su agrado.</p>
    </div>
  );
}
export default Acercade