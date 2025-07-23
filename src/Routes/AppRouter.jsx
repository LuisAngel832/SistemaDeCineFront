import { Route, Routes } from "react-router-dom"
import  MenuPrincipal  from "../pages/MenuPrincipal/MenuPrincipal"
import GestionBoletos from "../pages/GestionBoletos/GestionBoletos"
import RegistrarFuncion from "../pages/RegistrarFunciones/RegistrarFuncion"
const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/gestionboletos" element={<GestionBoletos />} />
        <Route path="registrarFuncion" element={<RegistrarFuncion/>}/>
    </Routes>
    )
}

export default AppRouter