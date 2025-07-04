const useFunciones = () => {
    const getAllFunciones = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/funciones",{
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
            const response = await fetch(`http://localhost:8080/api/funciones/buscar?titulo=${titulo}`, {
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
            const response = await fetch(`http://localhost:8080/api/funciones/buscar?fecha=${fechaFormateada}`, {
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

    return { getAllFunciones, buscarFuncionesPorFecha, buscarFuncionesPorTitulo };
};

export default useFunciones;