import { Route, Routes } from "react-router-dom"
import  MenuPrincipal  from "../pages/MenuPrincipal/"
import GestionBoletos from "../pages/GestionBoletos/"
import RegistrarFuncion from "../pages/RegistrarFunciones"
import RegistrarPelicula from "../pages/RegistrarPelicula/"    
    
const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/gestionboletos" element={<GestionBoletos />} />
        <Route path="/registrarFuncion" element={<RegistrarFuncion/>}/>
        <Route path="/registrarPelicula" element={<RegistrarPelicula/>}/>

    </Routes>
    )
}

export default AppRouter