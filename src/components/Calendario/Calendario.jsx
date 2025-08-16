import { useState, useEffect, use } from "react";
import calendarioStyle from "../../assets/css/calendario.module.css";

const Calendario = ({ setFecha, setIsOpen, X, Y }) => {
  const diasDeLaSemana = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth());
  const [anioSeleccionado, setAnioSeleccionado] = useState(
    new Date().getFullYear()
  );
  const [diasDelMes, setDiasDelMes] = useState([]);

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
    setFecha(new Date(anioSeleccionado, mesSeleccionado, dia));
    setIsOpen(false);
  };

  useEffect(() => {
    setDiasDelMes(obtenerDiasDelMes(anioSeleccionado, mesSeleccionado));
  }, [anioSeleccionado, mesSeleccionado]);

  const meses = obtenerMeses();

  return (
    <div
      className={calendarioStyle.calendario}
      style={{ transform: `translateX(${X}px) translateY(${Y}px)` }}
    >
      <div className={calendarioStyle.mes}>
        <select
          className={calendarioStyle.mesSelect}
          value={mesSeleccionado}
          onChange={(e) => setMesSeleccionado(Number(e.target.value))}
        >
          {meses.map((mes, index) => (
            <option
              key={index}
              value={index}
              className={calendarioStyle.mesOption}
            >
              {mes}
            </option>
          ))}
        </select>

        <select
          className={calendarioStyle.mesSelect}
          value={anioSeleccionado}
          onChange={(e) => setAnioSeleccionado(Number(e.target.value))}
        >
          {Array.from({ length: 5 }, (_, i) => anioSeleccionado - 2 + i).map(
            (anio) => (
              <option
                key={anio}
                value={anio}
                className={calendarioStyle.mesOption}
              >
                {anio}
              </option>
            )
          )}
        </select>
      </div>

      <div className={calendarioStyle.diasSemana}>
        {diasDeLaSemana.map((dia, index) => (
          <div
            key={index}
            className={`${calendarioStyle.diaSemana} ${calendarioStyle.dia}`}
          >
            <p>{dia}</p>
          </div>
        ))}
      </div>

      <div className={calendarioStyle.dias}>
        {diasDelMes.map((dia, index) => (
          <div key={index} className={calendarioStyle.dia}>
            <p onClick={() => seleccionarFecha(dia)}>{dia}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
