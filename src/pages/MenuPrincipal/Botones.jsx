import { Link } from "react-router-dom"

const Botones = () => {
    return(
        <div className="botones">
           <Link to="/gestionboletos"><button>GESTIÓN DE BOLETOS</button></Link>
           <Link to="/"><button>GESTIÓN DE FUNCIONES</button></Link>
           <Link to="/"><button>ESTADÍSTICA</button></Link>
        </div>
    )
}

export default Botones