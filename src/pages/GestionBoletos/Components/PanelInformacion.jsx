import "./../Styles/gestionBoleto.css";
import PropTypes from "prop-types";
import Buttons from "../../../components/Buttons";

const PanelInformacion = ({ datos, onClickCancelar, onClickContinuar }) => {
    const InfoLine = ({ label, value }) => (
        <div className="info-line">
            <span className="label">{label}:</span>
            <span className="value">{value}</span>
        </div>
    );

    return (
        <div className="panel-info">
            <div className="panel-info-content">
                <h2>Información de la Compra</h2>
                {datos ? (
                    <> <InfoLine label="Película" value={datos.funcion.titulo} />
                        <InfoLine label="Asientos" value={datos.boletos.join(", ")} />
                        <InfoLine label="Horario" value={datos.horarioFuncion} />
                        <InfoLine label="Total de la compra" value={`$${datos.montoTotal}`} />
                    </>
                ) : (<p>Cargando información...</p>)}
                <Buttons onClickCancelar={onClickCancelar} onClickContinuar={onClickContinuar} />
            </div>
        </div>
    );
};

PanelInformacion.propTypes = {
    datos: PropTypes.shape({
        funcion: PropTypes.shape({
            titulo: PropTypes.string.isRequired,
        }).isRequired,
        boletos: PropTypes.arrayOf(PropTypes.string).isRequired,
        horarioFuncion: PropTypes.string.isRequired,
        montoTotal: PropTypes.number.isRequired,
    }).isRequired,
    onClickCancelar: PropTypes.func.isRequired,
    onClickContinuar: PropTypes.func.isRequired,
};

export default PanelInformacion;
