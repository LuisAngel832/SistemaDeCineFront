import BotonCalendario from "./BotonCalendario";
import { X, Search} from "lucide-react";
import "busquedaFuncion.css"
const BusquedaFunciones = ({useSearchTitle, openCalendario, setOpenCalendario, closeCalendar, activeSearch, handleSubmit, handleChangeTitle}) => {
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
      />
      
    </div>
  );
};

export default BusquedaFunciones;