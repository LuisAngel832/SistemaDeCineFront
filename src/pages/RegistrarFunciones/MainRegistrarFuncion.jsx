import { useEffect, useState } from "react";
import usePelicula from "../../hooks/usePelicula";
import Calendario from "../../components/Calendario/Calendario";

import { Calendar } from "lucide-react";

const MainRegistrarFuncion = () => {
    const {getPeliculas} = usePelicula();
    const [calendarioOpen, setCalendarioOpen] = useState(false);

    const [peliculas, setPeliculas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);
    const [ṕrecioBoleto, setPrecioBoleto] = useState(0);
    const [asientosTotales, setAsientosTotales] = useState(0);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const pelicualasObtenidas = await getPeliculas();
                if (pelicualasObtenidas) {
                    setPeliculas(pelicualasObtenidas);
                } else {
                    console.error("No se encontraron peliculas");
                }
            } catch (error) {
                console.error("Error al obtener las peliculas:", error);
            }
        }
        fetchPeliculas();
    }, [getPeliculas]);


 useEffect(() => {
    console.log("Hora seleccionada:", horaSeleccionada);
  }, [ horaSeleccionada]);

    const handleCalendarClick = (event) => {
        event.stopPropagation();
        setCalendarioOpen(!calendarioOpen);
    };

    return (
        <div className="main-registrar-funcion">
            <div className="registrar-funcion-content">
                <form>
                    <div className="input-content">
                        <label htmlFor="pelicula">Pelicula</label>
                        <select name="" id="genero">
                            <option value="0">Selecciona una pelicula</option>
                            {peliculas.map((pelicula) => (
                                <option key={pelicula.id} value={pelicula.id}>
                                    {pelicula.titulo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-content fecha"  >
                        <label>Fecha</label>
                        <Calendar onClick={handleCalendarClick}  className="calendario-icon"/>
                        {calendarioOpen &&  <Calendario X={200} Y={230} setFecha={setFechaSeleccionada} setIsOpen={setCalendarioOpen}/>}
                    </div>

                    <div className="input-content">
                        <label htmlFor="hora">Hora</label>
                        <input type="time" id="hora" name="hora" onChange={(e) => setHoraSeleccionada(e.target.value)}/>
                    </div>
                    <div className="input-content">
                        <label htmlFor="precioBoleto">Precio Boleto</label>
                        <input type="number" max={10000} min={10} />
                    </div>
                    <div className="input-content">
                        <label htmlFor="asientosTotales">Asientos Totales</label>
                        <input type="number" max={100} min={10} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainRegistrarFuncion;