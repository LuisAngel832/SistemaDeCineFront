import { useEffect } from "react";
import Header from "../../components/Header";
import usePelicula from "../../hooks/usePelicula";

const MainRegistrarFuncion = () => {
    const {getPeliculas} = usePelicula();

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const peliculas = await getPeliculas();
                console.log("Peliculas obtenidas:", peliculas);
            } catch (error) {
                console.error("Error al obtener las peliculas:", error);
            }
        }
        fetchPeliculas();
    }, [getPeliculas]);
    return (
        <div className="main-registrar-funcion">
            <Header title="Registrar Funcion" />
            <div className="registrar-funcion-content">
                <form>
                    <div>
                        <label htmlFor="pelicula">Pelicula</label>
                        <select name="" id="genero">
                            <option value="0">Selecciona una pelicula</option>
                            <option  value="accion">aqui va la pelicula</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainRegistrarFuncion;