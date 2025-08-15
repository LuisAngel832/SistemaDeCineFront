import BotonCalendario from "./../Components/BotonCalendario";
import { X, Search} from "lucide-react";
import  "./../Styles/busquedaFuncion.css";
const BusquedaFunciones = ({useSearchTitle, openCalendario, setOpenCalendario, closeCalendar, activeSearch, handleSubmit, handleChangeTitle, setFunciones}) => {
  return (
    <div className="header-table-funciones">
      {useSearchTitle ? (
        <form onSubmit={activeSearch} className="busqueda">
          <input
            type="text"
            placeholder="Buscar por titulo"
            onChange={handleChangeTitle}
          />
          <button onSubmit={handleSubmit} className="search-button">
            <X />
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

      <BotonCalendario
        useSearchTitle={useSearchTitle}
        openCalendario={openCalendario}
        setOpenCalendario={setOpenCalendario}
        closeCalendar={closeCalendar}
        setFunciones={setFunciones}
      />
      
    </div>
  );
};

export default BusquedaFunciones;