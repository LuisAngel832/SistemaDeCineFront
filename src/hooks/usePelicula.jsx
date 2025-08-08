const usePelicula = (initialState) => {
    const ruta = "http://192.168.100.52:8080/api";

    const savePelicula = async (pelicula) => {
        pelicula = {
            ...pelicula,
            duracion: parseInt(pelicula.duracion, 10),
        }
        try {
            const response = await fetch(`${ruta}/peliculas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pelicula),
            });
            if (!response.ok) {
                throw new Error("Error al guardar la pelicula");
            }
            
            console.log("Pelicula guardada exitosamente:", response);
            return await response.json();
        } catch (error) {
            console.error("Error al guardar la pelicula:", error);
        }
    }

    const getPeliculas = async () => {
        try {
            const response = await fetch(`${ruta}/peliculas`);
            if (!response.ok) {
                throw new Error("Error al obtener las peliculas");
            }
            console.log("Peliculas obtenidas exitosamente:", response.json);
            return await response.json();
        } catch (error) {
            console.error("Error al obtener las peliculas:", error);
        }
    }

    return { savePelicula, getPeliculas };
}

export default usePelicula;