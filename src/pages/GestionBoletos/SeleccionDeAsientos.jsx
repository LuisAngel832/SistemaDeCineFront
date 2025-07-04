import pantalla from "./../../assets/img/pantalla.png"
import asiento from "./../../assets/img/asiento.png"
import HeaderSeleccionDeAsientos from "./HeaderSeleccionAsientos";
const SeleccionDeAsientos = () => {
  const filas = [1,2,3,4,5,6,7,8,9,10, 11]
  const columnas = ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'G ', 'H ']

  return (
    <section className="funciones-content">
      {/* header de asientos */}
      <HeaderSeleccionDeAsientos />
      <div className="seleccionarAsientos-contenido">
        <img src={pantalla} alt="pantalla" className="img-pantalla"/>
        <div className="asientos">
          <div className="filas"> 
            <p> </p>
            {filas.map((fila)=>{
              
              return(
                <p>{fila}</p>
              )
            })}
          </div>
          <div className="columnas-content">
            <div className="columnas">
              {columnas.map((columna)=>{
                return(
                  <p key={columna}>{columna}</p>
                )
              })}
              </div>
              <div className="asientos-icon">
                {columnas.map((columna) => {
                  return filas.map((fila) => (
                    <div className="asiento" key={`${fila}${columna.trim()}`}><img src={asiento} alt="" /></div>
                  ));
                })}
              </div>
            
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SeleccionDeAsientos;
