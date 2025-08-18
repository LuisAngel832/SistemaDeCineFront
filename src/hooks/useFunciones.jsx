import js from "@eslint/js";

const useFunciones = () => {
    const ruta = "http://192.168.100.52:8080/api"
        const getAllFunciones = async () => {
        try {
            const response = await fetch(`${ruta}/funciones`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

   const buscarFuncionesPorTitulo = async (titulo) => {
        try {
            const response = await fetch(`${ruta}/funciones/buscar?titulo=${titulo}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const buscarFuncionesPorFecha = async (fecha) => {
        const fechaFormateada = fecha.toISOString().split('T')[0];

        try {
            const response = await fetch(`${ruta}/funciones/buscar?fecha=${fechaFormateada}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const obtenerDetalleFuncion = async (id) => {
        try {
            const response = await fetch(`${ruta}/funciones/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const actualizarFuncion = async (id, funcion) => {
        console.log(funcion)
        try {
            const response = await fetch(`${ruta}/funciones/actualizar/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(funcion) ,
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const registrarFuncion = async (funcion) => {
        try {
            const response = await fetch(`${ruta}/funciones`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(funcion),
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }



    return { getAllFunciones, buscarFuncionesPorFecha, buscarFuncionesPorTitulo, obtenerDetalleFuncion,actualizarFuncion };
};

export default useFunciones;