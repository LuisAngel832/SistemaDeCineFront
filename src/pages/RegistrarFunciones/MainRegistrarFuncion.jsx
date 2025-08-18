import { use, useEffect, useState } from "react";
import usePelicula from "../../hooks/usePelicula";
import Calendario from "../../components/Calendario/Calendario";

import { Calendar } from "lucide-react";
import { func } from "prop-types";

const MainRegistrarFuncion = ({ funcion, setFuncion }) => {
    const { getPeliculas } = usePelicula();
    const [calendarioOpen, setCalendarioOpen] = useState(false);
    const [peliculas, setPeliculas] = useState([]);




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
        console.log("Funcion actualizada:", funcion);
    }, [funcion]);

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
                        <select
                            id="pelicula"
                            value={funcion.pelicula || "0"}
                            onChange={(e) => {
                                const idSeleccionado = e.target.value;

                                setFuncion((prev) => ({
                                    ...prev,
                                    pelicula: idSeleccionado || null,
                                }));
                            }}
                        >
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
                        <div className="fecha-content">
                            <Calendar onClick={handleCalendarClick} className="calendario-icon" />
                            <p onClick={handleCalendarClick} >
                                {funcion.fecha
                                    ? new Intl.DateTimeFormat("es-ES", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    }).format(new Date(funcion.fecha))
                                    : <></>}
                            </p>

                        </div>
                        {calendarioOpen && <Calendario X={200} Y={230} setFecha={(nuevaFecha) => { setFuncion(prev => ({ ...prev, fecha: nuevaFecha })) }} setIsOpen={setCalendarioOpen} />}
                    </div>

                    <div className="input-content">
                        <label htmlFor="hora">Hora</label>
                        <input type="time" id="hora" name="hora" onChange={(e) => setFuncion(prev => ({ ...prev, hora: e.target.value }))} />
                    </div>
                    <div className="input-content">
                        <label htmlFor="precioBoleto">Precio Boleto</label>
                        <input type="number" max={10000} min={10} onChange={(e) => { setFuncion(prev => ({ ...prev, precioBoleto: Number(e.target.value) })) }} />
                    </div>
                    <div className="input-content">
                        <label htmlFor="asientosTotales">Asientos Totales</label>
                        <input type="number" max={100} min={10} onChange={(e) => { setFuncion(prev => ({ ...prev, asientosTotales: Number(e.target.value) })) }} />
                    </div>

                    <div>
                        <label htmlFor=""></label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainRegistrarFuncion;