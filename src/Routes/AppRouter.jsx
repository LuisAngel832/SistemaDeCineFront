import { Route, Routes } from "react-router-dom"
import  MenuPrincipal  from "../pages/MenuPrincipal/MenuPrincipal"
import GestionBoletos from "../pages/GestionBoletos/GestionBoletos"
const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/gestionboletos" element={<GestionBoletos />} />
    </Routes>
    )
}

export default AppRouter