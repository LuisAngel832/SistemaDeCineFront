import { useEffect, useState } from "react";
import useFunciones from "../../hooks/useFunciones";
import { X, Search, Calendar } from "lucide-react";
import Calendario from "../../components/Calendario";
const Funciones = () => {
  const [funciones, setFunciones] = useState([]);
  const [openCalendario, setOpenCalendario] = useState(false);
  const [useSearchTitle, setUseSearchTitle] = useState(false);

  const { getAllFunciones, buscarFuncionesPorTitulo } = useFunciones();

  const activeSearch = () => {
    setUseSearchTitle(!useSearchTitle);
  };

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

  useEffect(() => {
    const fetchFunciones = async () => {
      const f = await getAllFunciones();
      setFunciones(f);
    };
    fetchFunciones();
  }, []);

  return (
    <div className="funciones-content">
      <div className="header-table-funciones">
        {useSearchTitle ? (
          <form onSubmit={activeSearch} className="busqueda">
            <input
              type="text"
              placeholder="Buscar por titulo"
              onChange={handleChangeTitle}
            />
            <button onSubmit={handleSubmit} className="search-button">
              <X  />
            </button>
          </form>
        ) : (
          <button
            onClick={activeSearch}
            className={useSearchTitle ? "active" : ""}
          >
            {" "}
            <Search />
            Titulo
          </button>
        )}

        {useSearchTitle ? (
          <></>
        ) : (
          <button
            type="calendar"
            onClick={() => setOpenCalendario(!openCalendario)}
          >
            {" "}
            {openCalendario ? <X /> : <><Calendar />Fecha</>}
            
          </button>
        )}
        {openCalendario === true && useSearchTitle === false && <Calendario closeCalendario={closeCalendar} setFunciones={setFunciones} />}
      </div>
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
};

export default Funciones;
