
import "./MenuPrincipal.css"
import logo from "../../assets/img/logo.png"
import Botones from "./Botones.jsx"
const MenuPrincipal = () => {
    return (
        <div className="menu-principal">
            <div className="main-menu-principal">
                <img src={logo} alt="logo" className="logo" />
                <Botones />
            </div>
        </div>
    )
}

export default MenuPrincipal