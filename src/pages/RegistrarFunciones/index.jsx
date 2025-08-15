import MainRegistrarFuncion from "./MainRegistrarFuncion";
import "./index.css";  
import Header from "../../components/Header";

const RegistrarFuncion = () => {
    return(
        <div className="RegistrarFunciones">
            <Header title="Registrar Funcion" />
            <MainRegistrarFuncion />
        </div>
    )
}

export default RegistrarFuncion;