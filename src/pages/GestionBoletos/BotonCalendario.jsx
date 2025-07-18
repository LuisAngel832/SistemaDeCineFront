
import Calendario from "../../components/Calendario";
import {Calendar, X } from "lucide-react";
import PropTypes from "prop-types";

const BotonCalendario = ({useSearchTitle, openCalendario, setOpenCalendario, closeCalendar, setFunciones}) => {
  return (
    <div>
      {useSearchTitle ? (
        <></>
      ) : (
        <button
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
          closeCalendario={closeCalendar}
          setFunciones={setFunciones}
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