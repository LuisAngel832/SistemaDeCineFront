import '../assets/css/headerBotones.css'
import { Link } from "react-router-dom"
const HeaderBotones = ({onClickBtn1, onClickBtn2}) =>{
    return(
        <div className="header-botones">
            <Link to="/" className="regresar button"><button  onClick={onClickBtn1}>Regresar</button></Link>
            <Link to="/menu" className="continuar button"><button onClick={onClickBtn2}>Continuar</button></Link>
        </div>
    )
}

export default HeaderBotones