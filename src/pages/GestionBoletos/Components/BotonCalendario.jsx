
import Calendario from "../../../components/Calendario/Calendario";
import { Calendar, X } from "lucide-react";
import PropTypes from "prop-types";
import { use, useEffect, useState} from "react";
import useFunciones from "../../../hooks/useFunciones";




const BotonCalendario = ({ useSearchTitle, openCalendario, setOpenCalendario, closeCalendar, setFunciones }) => {
const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
const { buscarFuncionesPorFecha} = useFunciones();


useEffect(() => {
  const buscarFunciondsPorFecha = async () => {
    if (fechaSeleccionada) {
      const funciones = await buscarFuncionesPorFecha(fechaSeleccionada);
      setFunciones(funciones);
      console.log("Funciones encontradas:",fechaSeleccionada, funciones);
    }
  }
  buscarFunciondsPorFecha();
}, [fechaSeleccionada]);
  return (
    <div className="boton-calendario">
      {useSearchTitle ? (
        <></>
      ) : (
        <button
          className="calendario-button"
          type="calendar"
          onClick={() => setOpenCalendario(!openCalendario)}
        >
          {" "}
          {openCalendario ? (
            <X />
          ) : (
            <>
              <Calendar />
              Fecha
            </>
          )}
        </button>
      )}
      {openCalendario === true && useSearchTitle === false && (
        <Calendario
          X={200}
          Y={230}
          closeCalendario={closeCalendar}
          setFecha={setFechaSeleccionada}
        />
      )}
    </div>
  );
};
BotonCalendario.propTypes = {
  useSearchTitle: PropTypes.bool.isRequired,
  openCalendario: PropTypes.bool.isRequired,
  setOpenCalendario: PropTypes.func.isRequired,
  closeCalendar: PropTypes.func.isRequired,
  setFunciones: PropTypes.func.isRequired,
};


export default BotonCalendario