import '../assets/css/headerBotones.css'
import { Link } from "react-router-dom"
const HeaderBotones = ({handleClickBtn1, handleClickBtn2}) =>{
    return(
        <div className="header-botones">
            <Link to="/" className="regresar button"><button  onClick={handleClickBtn2}>Regresar</button></Link>
            <Link  className="continuar button"><button onClick={handleClickBtn1}>Continuar</button></Link>
        </div>
    )
}

export default HeaderBotones