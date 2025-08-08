import './../assets/css/buttons.css'
const Buttons = ({ onClickContinuar,onClickCancelar }) => {
    return (
        <div className="panel-info-buttons">
            <button className="cancelar" onClick={onClickCancelar}>Cancelar</button>
            <button className="continuar" onClick={onClickContinuar}>Confirmar</button>
        </div>
    );
}

export default Buttons;