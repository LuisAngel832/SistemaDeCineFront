import FormRegistrarPelicula from "./Form";
import Header from "../../components/Header";
import usePelicula from "../../hooks/usePelicula";
import { useState } from "react";
import "./registrarPelicula.css";
import PeliculaGuardadaPanel from "./GuardarPanel";
const RegistraPelicula = () => {
  const { savePelicula } = usePelicula();
  const [peliculaModel, setPeliculaModel] = useState({
    titulo: "",
    genero: "",
    descripcion: "",
    duracion: 0,
  });

  const [isPeliculaGuardada, setIsPeliculaGuardada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    savePelicula(peliculaModel)
      .then((response) => {
        console.log("Pelicula guardada:", response);
        setIsPeliculaGuardada(true);
      })
      .catch((error) => {
        console.error("Error al guardar la película:", error);
      });
  };

  const handleContinueClick = () => {
    setIsPeliculaGuardada(!isPeliculaGuardada);
  };
  return (
    <div className="registrar-pelicula">
      {isPeliculaGuardada && (
        <PeliculaGuardadaPanel hancleClick={handleContinueClick} />
      )}
      <Header
        title="Registrar Pelicula"
        showButtons={true}
        handleClickBtn1={handleSubmit}
      />
       <FormRegistrarPelicula peliculaModel={peliculaModel} setPeliculaModel={setPeliculaModel} handleSubmit={handleSubmit} isPeliculaGuardada={isPeliculaGuardada} />
        
    </div>
  );
};

export default RegistraPelicula;
