import {AlignJustify} from "lucide-react"
import "../assets/css/miniMenu.css"
import { Link } from "react-router-dom"
import { useState } from "react"
const MiniMenu = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return(
        <>
        <div className="mini-menu">
            <AlignJustify width={64} height={64} strokeWidth={3} className={`menu  ${open ? "open" : ""}`} onClick={handleClick}/>
        </div>

        {open && <div className="menu-options">
            <Link to="/gestionboletos"><button>GESTIÓN DE BOLETOS</button></Link>
            <Link to="/"><button>GESTIÓN DE FUNCIONES</button></Link>
            <Link to="/"><button>ESTADÍSTICA</button></Link>
        </div>}
        </>
    )
}

export default MiniMenu