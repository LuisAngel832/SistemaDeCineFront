import Header from "../../components/Header";
import MainGestionBoletos from "./MainGestionBoletos";
import { use, useState } from "react";
import useCompra from "../../hooks/useCompra";
const GestionBoletos = () => {
  const [funcionActualizada, setFuncionActualizada] = useState({});
  const [showPanelInfo, setShowPanelInfo] = useState(false);
  const { registrarCompra } = useCompra();
  const [compraBody, setCompraBody] = useState({
    monto: 0,
    funcionId: 0,
    boletos: [],
  });
  const [asientosOcupados, setAsientosOcupados] = useState([]);
  const handleClickContinuar = () => {
    setShowPanelInfo(true);
  }

  const realizarCompra = async() => {
    if (compraBody.monto <= 0) {
      return;
    }
    if (compraBody.boletos.length <= 0) {
      return;
    }
    if (compraBody.funcionId <= 0) {
      return;
    }
    const response = await registrarCompra(compraBody);
    setAsientosOcupados(response.funcion.boletosVendidos.map((b) => b.codigoAsiento));
  };

  return (
    <div>
      <Header title="GESTIÓN DE BOLETOS" handleClickBtn1={handleClickContinuar} />
      <MainGestionBoletos
        setFuncionActualizada={setFuncionActualizada}
        funcionActualizada={funcionActualizada}
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

export default GestionBoletos;
