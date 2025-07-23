import { useEffect, useState } from "react";
import useFunciones from "../../hooks/useFunciones";
import PropTypes from "prop-types";
import BusquedaFunciones from "./BusquedaFunciones";

const Funciones = ({
  funciones,
  setFunciones,
  setFuncion,
  funcion,
  setCompraBody,
  compraBody,
}) => {
  const [openCalendario, setOpenCalendario] = useState(false);
  const [busquedaActiva, setBusquedaActiva] = useState(false);

  const {
    getAllFunciones,
    buscarFuncionesPorTitulo,
    obtenerDetalleFuncion,
  } = useFunciones();

  const handleSeleccionFuncion = async (id) => {
    const f = await obtenerDetalleFuncion(id);
    setFuncion(f);
    setCompraBody({ ...compraBody, funcionId: f.id });
  };

  const handleBuscarPorTitulo = async (e) => {
    const query = e.target.value.trim();
    if (query.length > 1) {
      const resultados = await buscarFuncionesPorTitulo(query);
      setFunciones(resultados);
    }
  };

  const cargarFunciones = async () => {
    const funciones = await getAllFunciones();
    setFunciones(funciones);
  };

  useEffect(() => {
    cargarFunciones();
  }, []);

  return (
    <div className="funciones-content">
      <BusquedaFunciones
        setFunciones={setFunciones}
        useSearchTitle={busquedaActiva}
        openCalendario={openCalendario}
        setOpenCalendario={setOpenCalendario}
        closeCalendar={() => setOpenCalendario(false)}
        activeSearch={() => setBusquedaActiva(!busquedaActiva)}
        handleSubmit={(e) => e.preventDefault()}
        handleChangeTitle={handleBuscarPorTitulo}
      />

      <table className="funciones-table">
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>
              FECHA <br /> Y HORA
            </th>
            <th>
              LUGARES <br /> DISPONIBLES
            </th>
          </tr>
        </thead>
        <tbody className="funciones-tbody">
          {funciones?.map((f, index) => (
            <tr
              key={f.id}
              className={`funcion ${index % 2 === 0 ? "even" : "odd"} ${
                f.id === funcion?.id ? "seleccionada" : ""
              }`}
              onClick={() => handleSeleccionFuncion(f.id)}
              tabIndex="0"
            >
              <td>{f.pelicula?.titulo}</td>
              <td>
                {f.fecha} <br /> {f.hora}
              </td>
              <td>{f.asientosTotales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Funciones.propTypes = {
  funciones: PropTypes.array.isRequired,
  setFunciones: PropTypes.func.isRequired,
  setFuncion: PropTypes.func.isRequired,
  funcion: PropTypes.object.isRequired,
  setCompraBody: PropTypes.func.isRequired,
  compraBody: PropTypes.object.isRequired,
};

export default Funciones;
