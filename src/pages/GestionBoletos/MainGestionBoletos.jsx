import "./gestionBoleto.css";
import Funciones from "./Funciones";
import SeleccionDeAsientos from "./SeleccionDeAsientos";
import { useState } from "react";
import PropTypes from "prop-types";

const MainGestionBoletos = ({
  setFuncionActualizada,
  compraBody,
  setCompraBody,
  asientosOcupados,
  setAsientosOcupados,
  funcion,
  setFuncion,
  compraRealizada,
}) => {
  const [funciones, setFunciones] = useState([]); // solo local

  return (
    <div className="main-gestion-boletos">
      <Funciones
        funcion={funcion}
        funciones={funciones}
        setFunciones={setFunciones}
        setFuncion={setFuncion}
        setFuncionActualizada={setFuncionActualizada}
        setCompraBody={setCompraBody}
        compraBody={compraBody}
      />

      <SeleccionDeAsientos
        funcion={funcion}
        compraBody={compraBody}
        setCompraBody={setCompraBody}
        asientosOcupados={asientosOcupados}
        setAsientosOcupados={setAsientosOcupados}
        compraRealizada={compraRealizada}
      />
    </div>
  );
};

MainGestionBoletos.propTypes = {
  setFuncionActualizada: PropTypes.func.isRequired,
  compraBody: PropTypes.object.isRequired,
  setCompraBody: PropTypes.func.isRequired,
  asientosOcupados: PropTypes.array.isRequired,
  setAsientosOcupados: PropTypes.func.isRequired,
  funcion: PropTypes.object.isRequired,
  setFuncion: PropTypes.func.isRequired,
  compraRealizada: PropTypes.bool.isRequired,
};

export default MainGestionBoletos;
