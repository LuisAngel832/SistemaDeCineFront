import'./gestionBoleto.css'
import Funciones from './Funciones'
import SeleccionDeAsientos from './SeleccionDeAsientos'
const MainGestionBoletos = () => {
    return(
        <div className="main-gestion-boletos">
            <Funciones />
            <SeleccionDeAsientos />
        </div>
    )
}

export default MainGestionBoletos