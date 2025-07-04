import { useState, useEffect, use } from "react";
import "../assets/css/calendario.css";
import useFunciones from "../hooks/useFunciones";
const Calendario = ({ closeCalendario, setFunciones }) => {
  const diasDeLaSemana = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth());
  const [anioSeleccionado, setAnioSeleccionado] = useState(
    new Date().getFullYear()
  );
  const [diasDelMes, setDiasDelMes] = useState([]);
  const { buscarFuncionesPorFecha } = useFunciones();

  const obtenerMeses = () => {
    const formatter = new Intl.DateTimeFormat("es-MX", { month: "long" });
    return Array.from(
      { length: 12 },
      (_, i) =>
        formatter.format(new Date(2000, i)).charAt(0).toUpperCase() +
        formatter.format(new Date(2000, i)).slice(1)
    );
  };

  const obtenerDiasDelMes = (anio, mes) => {
    const cantidadDias = new Date(anio, mes + 1, 0).getDate();
    return Array.from({ length: cantidadDias }, (_, i) => i + 1);
  };

  const seleccionarFecha = async (dia) => {
    const FechaSeleccionada = new Date(anioSeleccionado, mesSeleccionado, dia);
    setFunciones(await buscarFuncionesPorFecha(FechaSeleccionada));
    closeCalendario();
  };

  useEffect(() => {
    setDiasDelMes(obtenerDiasDelMes(anioSeleccionado, mesSeleccionado));
  }, [anioSeleccionado, mesSeleccionado]);

  const meses = obtenerMeses();

  return (
    <div className="calendario">
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

      <div className="diasSemana">
        {diasDeLaSemana.map((dia, index) => (
          <div key={index} className="dia">
            <p>{dia}</p>
          </div>
        ))}
      </div>

      <div className="dias">
        {diasDelMes.map((dia, index) => (
          <div key={index} className="dia">
            <p onClick={() => seleccionarFecha(dia)}>{dia}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
