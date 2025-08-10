
import { useState, useEffect } from "react";

export default function useCalendario() {
  const diasDeLaSemana = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth());
  const [anioSeleccionado, setAnioSeleccionado] = useState(new Date().getFullYear());
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

  useEffect(() => {
    setDiasDelMes(obtenerDiasDelMes(anioSeleccionado, mesSeleccionado));
  }, [anioSeleccionado, mesSeleccionado]);

  return {
    diasDeLaSemana,
    mesSeleccionado,
    setMesSeleccionado,
    anioSeleccionado,
    setAnioSeleccionado,
    diasDelMes,
    meses: obtenerMeses(),
  };
}
