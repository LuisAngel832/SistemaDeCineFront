const HeaderSeleccionDeAsientos = () => {
  return (
    <header className="header-asientos">
      <div className="numeros-asientos" aria-label="Mapa de asientos">
        <p>Numero de asientos </p> <p className="valor"> 0</p>
      </div>
      <div className="precio-boleto" aria-label="Precio por boleto">
        <p>Precio por boleto </p> <p className="valor">$0</p>
      </div>
    </header>
  );
};

export default HeaderSeleccionDeAsientos;