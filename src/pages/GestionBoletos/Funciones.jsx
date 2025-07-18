import { useEffect, useState } from "react";
import useFunciones from "../../hooks/useFunciones";
import PropTypes from "prop-types";
import BusquedaFunciones from "./BusquedaFunciones";

const Funciones = ({funciones, setFunciones, setFuncion, funcion,setCompraBody, compraBody}) => {
  const [openCalendario, setOpenCalendario] = useState(false);
  const [useSearchTitle, setUseSearchTitle] = useState(false);

  const { getAllFunciones, buscarFuncionesPorTitulo, obtenerDetalleFuncion} = useFunciones();

  const activeSearch = () => {
    setUseSearchTitle(!useSearchTitle);
  };

  const esperarFuncion = async (id) => {
    const f = await obtenerDetalleFuncion(id);
    setFuncion(f)
    setCompraBody({...compraBody, funcionId: f.id})
  }

  const closeCalendar=()=>{
    setOpenCalendario(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setUseSearchTitle(false);
  };

  const handleChangeTitle = async (e) => {
    setFunciones(await buscarFuncionesPorTitulo(e.target.value));
  };

  useEffect(() =>{
    setCompraBody({...compraBody, funcionId: funcion.id})
  }, [funcion])

  useEffect(() => {
    const fetchFunciones = async () => {
      const f = await getAllFunciones();
      setFunciones(f);
    };
    fetchFunciones();
  }, []);

  return (
    <div className="funciones-content">
      <BusquedaFunciones
        useSearchTitle={useSearchTitle}
        openCalendario={openCalendario}
        setOpenCalendario={setOpenCalendario}
        closeCalendar={closeCalendar}
        activeSearch={activeSearch}
        handleSubmit={handleSubmit}
        handleChangeTitle={handleChangeTitle}
      />
      <table className="funciones-table">
        <thead>
          <tr>
            <th>TITULO</th>
            <th>
              FECHA Y <br /> HORA
            </th>
            <th>
              LUGARES <br />
              DISPONIBLES
            </th>
          </tr>
        </thead>
        <tbody className="funciones-tbody">
          {funciones?.map((funcion, index) => (
            <tr
              key={funcion.id}
              className={`funcion ${index % 2 === 0 ? "even" : "odd"}`}
              onClick={() => esperarFuncion(funcion.id)}
            >
              <td>{funcion.pelicula.titulo}</td>
              <td>
                {funcion.fecha} <br /> {funcion.hora}
              </td>
              <td>{funcion.asientosTotales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Funciones.propTypes = {
  funciones: PropTypes.array.isRequired,
  setFunciones: PropTypes.func.isRequired,
  setFuncion: PropTypes.func.isRequired,
  funcion: PropTypes.object.isRequired,
  setCompraBody: PropTypes.func.isRequired,
  compraBody: PropTypes.object.isRequired,
};

export default Funciones;
