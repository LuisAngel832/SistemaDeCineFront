import "../assets/css/header.css"
import MiniMenu from "./MiniMenu"
import HeaderBotones from "./HeaderBotones" 
const Header = ({title="Venta de boletos", showButtons=true, handleClickBtn1, handleClickBtn2, } ) =>{
    return(

        <div className="header">
            <MiniMenu />
            <p className="title">{title}</p>
            {showButtons && <HeaderBotones handleClickBtn1={handleClickBtn1} handleClickBtn2={handleClickBtn2} />}
        </div>
    )
}

export default Header