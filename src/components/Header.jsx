import "../assets/css/header.css"
import MiniMenu from "./MiniMenu"
import HeaderBotones from "./HeaderBotones" 
const Header = ({title="Venta de boletos", showButtons=true, handleClick} ) =>{
    return(
        <div className="header">
            <MiniMenu />
            <p className="title">{title}</p>
            {showButtons && <HeaderBotones />}
        </div>
    )
}

export default Header