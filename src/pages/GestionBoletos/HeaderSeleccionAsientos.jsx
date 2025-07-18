const HeaderSeleccionDeAsientos = ({cantidadAsientos, precioTotal}) => {
  return (
    <header className="header-asientos">
      <div className="numeros-asientos" aria-label="Mapa de asientos">
        <p>Numero de asientos </p> <p className="valor">{cantidadAsientos}</p>
      </div>
      <div className="precio-boleto" aria-label="Precio por boleto">
        <p>Precio total:   </p> <p className="valor">${precioTotal}</p>
      </div>
    </header>
  );
};

export default HeaderSeleccionDeAsientos;