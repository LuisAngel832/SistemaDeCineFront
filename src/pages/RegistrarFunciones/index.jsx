import MainRegistrarFuncion from "./MainRegistrarFuncion";
import { useState } from "react";
import "./index.css";
import Header from "../../components/Header";

const RegistrarFuncion = () => {
    const [funcion, setFuncion] = useState({
        pelicula: null,
        fecha: null,
        hora: null,
        precioBoleto: 0,
        asientosTotales: 0,
    });


     

    return (
        <div className="RegistrarFunciones">
            <Header title="Registrar Funcion" />
            <MainRegistrarFuncion funcion={funcion} setFuncion={setFuncion} />
        </div>
    )
}

export default RegistrarFuncion;