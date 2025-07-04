import logo from "../../assets/img/logo.png"
import Botones from "./Botones"
const MainMenuPrincipal = () => {
    return(
        <div className="main-menu-principal">
            <img src={logo} alt="logo" className="logo" />
            <Botones />
        </div>
    )
}

export default MainMenuPrincipal