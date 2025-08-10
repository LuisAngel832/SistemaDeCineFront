const PeliculaGuardadaPanel = ({hancleClick}) => {
    return (
        <div className="pelicula-guardada-panel">
            <div className="content">
                <p>Pelicula Guardada</p>
                <button onClick={hancleClick}>Continuar</button>
            </div>
        </div>
    );
}

export default PeliculaGuardadaPanel; 