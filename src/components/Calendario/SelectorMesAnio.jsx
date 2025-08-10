const SelectorMesAnio = ({
  meses,
  mesSeleccionado,
  setMesSeleccionado,
  anioSeleccionado,
  setAnioSeleccionado,
}) => {
  return (
    <div className="mes">
      <select
        value={mesSeleccionado}
        onChange={(e) => setMesSeleccionado(Number(e.target.value))}
      >
        {meses.map((mes, index) => (
          <option key={index} value={index}>
            {mes}
          </option>
        ))}
      </select>

      <select
        value={anioSeleccionado}
        onChange={(e) => setAnioSeleccionado(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => anioSeleccionado - 2 + i).map(
          (anio) => (
            <option key={anio} value={anio}>
              {anio}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default SelectorMesAnio;
