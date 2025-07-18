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
  showPanelInfo,
  setShowPanelInfo
}) => {
  const [funciones, setFunciones] = useState([]);
  const [funcion, setFuncion] = useState({});

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
        showPanelInfo={showPanelInfo}
        setShowPanelInfo={setShowPanelInfo}
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
  showPanelInfo: PropTypes.bool.isRequired,
  setShowPanelInfo: PropTypes.func.isRequired
};

export default MainGestionBoletos;
