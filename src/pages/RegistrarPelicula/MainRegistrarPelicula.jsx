import FormRegistrarPelicula from "./FormRegistrarPelicula";

const RegistraPelicula = ({peliculaModel, setPeliculaModel , handleSubmit, isPeliculaGuardada}) => {    

    return (
        <div className="main-registrar-pelicula">
            <FormRegistrarPelicula peliculaModel={peliculaModel} setPeliculaModel={setPeliculaModel} handleSubmit={handleSubmit} isPeliculaGuardada={isPeliculaGuardada} />
        </div>
    );
}

export default RegistraPelicula;