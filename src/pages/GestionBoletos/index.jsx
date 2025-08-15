import Header from "../../components/Header";
import Funciones from "./Components/Funciones";
import SeleccionDeAsientos from "./Components/SeleccionDeAsientos";
import { use, useEffect, useMemo, useState } from "react";
import useCompra from "../../hooks/useCompra";
import PanleInformacion from "./Components/PanelInformacion";

const GestionBoletos = () => {
  const { registrarCompra } = useCompra();

  const [funcion, setFuncion] = useState({});
  const [funcionActualizada, setFuncionActualizada] = useState({});
  const [asientosOcupados, setAsientosOcupados] = useState([]);
  const [showPanelInfo, setShowPanelInfo] = useState(false);
  const [compraRealizada, setCompraRealizada] = useState(false);
   const [funciones, setFunciones] = useState([]);

  const [compraBody, setCompraBody] = useState({
    monto: 0,
    funcionId: 0,
    boletos: [],
  });

const compraModel = useMemo(() => ({
  funcion: {
    titulo: funcion?.pelicula?.titulo || "",
  },
  boletos: compraBody.boletos || [],
  horarioFuncion: funcion?.hora || "",
  montoTotal: compraBody.monto || 0,
}), [compraBody, funcion]);


  const validarCompra = () => {
    return (
      compraBody.monto > 0 &&
      compraBody.boletos.length > 0 &&
      compraBody.funcionId > 0
    );
  };

  const handleClickContinuar = () => {
    if (!validarCompra()) {
      alert("Por favor, selecciona una función, asientos y verifica el monto.");
      return;
    }
    setShowPanelInfo(true);
  };

  const handleClickCancelar = () => {
    setShowPanelInfo(false);
  };

  const realizarCompra = async () => {
    if (!validarCompra()) return;

    try {
      const response = await registrarCompra(compraBody);
      const boletosOcupados = response.funcion.boletosVendidos.map((b) => b.codigoAsiento);
      setAsientosOcupados(boletosOcupados);
      setFuncion(response.funcion); // <-- Actualiza la función con los nuevos boletos vendidos
      alert("Compra realizada con éxito");
      setCompraRealizada(prev => !prev);
      setShowPanelInfo(false);
    } catch (error) {
      alert("Hubo un error al realizar la compra.");
      console.error(error);
    }
  };




  return (
    <div>
      {showPanelInfo && (
        <PanleInformacion
          datos={compraModel}
          onClickCancelar={handleClickCancelar}
          onClickContinuar={realizarCompra}
        />
      )}
      <Header
        title="GESTIÓN DE BOLETOS"
        handleClickBtn1={handleClickContinuar}
      />
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
    </div>
  );
};

export default GestionBoletos;
