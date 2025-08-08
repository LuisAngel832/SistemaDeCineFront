import { useEffect } from "react";
import Buttons from "../../components/Buttons";
const FormRegistrarPelicula = ({peliculaModel, setPeliculaModel, isPeliculaGuardada}) => {

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPeliculaModel((prevModel) => ({
            ...prevModel,
            [id]: value
        }));
    };

    useEffect(() => {
        if (isPeliculaGuardada) {
            setPeliculaModel({
                titulo: "",
                genero: "",
                descripcion: "",
                duracion: 0
            });
        }
    }, [isPeliculaGuardada]);


    return (
        <div className="form-registrar-pelicula-content">
            <form action="">
                <section className="info-pelicula">
                    <div className="text-field">
                        <label htmlFor="titulo">Titulo de la pelicula</label>
                        <input type="text" id="titulo" value={peliculaModel.titulo} onChange={handleInputChange}/>
                    </div>

                    <div className="text-field">
                        <label htmlFor="genero">Generos</label>
                        <select name="" id="genero" value={peliculaModel.genero} onChange={handleInputChange}>
                            <option value="0">Selecciona un Genero</option>
                            <option  value="accion">accion</option>
                        </select>
                    </div>

                    <div className="text-field">
                        <label htmlFor="descripcion">Descripcion
                        </label>
                        <textarea id="descripcion" rows="4" value={peliculaModel.descripcion} onChange={handleInputChange}></textarea>
                    </div>


                    <div className="text-field-duracion">
                        <label htmlFor="duracion">Duracion
                        </label>
                        <input className="duracion" type="number" value={peliculaModel.duracion} id="duracion" onChange={handleInputChange}/>
                        <p>Min</p>
                    </div>


                </section>
            </form>
        </div>
    );
}

export default FormRegistrarPelicula;