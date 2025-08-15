import React, { useState, useEffect, useMemo } from "react";
import HeaderSeleccionDeAsientos from "./../Components/HeaderSeleccionAsientos";
import pantalla from "../../../assets/img/pantalla.png";
import asiento from "../../../assets/img/asiento.png"; 
import asientoOcupado from "../../../assets/img/asientoOcupado.png";
import asientoSeleccionado from "../../../assets/img/asientoSeleccionado.png";

const SeleccionDeAsientos = ({
  funcion,
  setCompraBody,
  compraBody,
  asientosOcupados,
  setAsientosOcupados,
  compraRealizada,
}) => {
  const filas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const columnas = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  useEffect(() => {
    setAsientosOcupados(
      funcion.boletosVendidos?.map((b) => b.codigoAsiento) || []
    );
    setAsientosSeleccionados([]);
    setCompraBody({ ...compraBody, boletos: [], monto: 0 });
  }, [funcion, compraRealizada]);

  const handleClickAsiento = (id) => {
    if (asientosOcupados.includes(id)) return;

    let nuevosAsientos;
    if (asientosSeleccionados.includes(id)) {
      nuevosAsientos = asientosSeleccionados.filter((a) => a !== id);
    } else {
      nuevosAsientos = [...asientosSeleccionados, id];
    }

    const nuevoMonto = nuevosAsientos.length * (funcion.precioBoleto || 0);

    setAsientosSeleccionados(nuevosAsientos);
    setCompraBody({
      ...compraBody,
      boletos: nuevosAsientos,
      monto: nuevoMonto,
    });
  };

  return (
    <section className="funciones-content">
      {Object.keys(funcion).length > 0 ? (
        <>
          <HeaderSeleccionDeAsientos
            cantidadAsientos={asientosSeleccionados.length}
            precioTotal={compraBody.monto}
          />

          <div className="seleccionarAsientos-contenido">
            <img src={pantalla} alt="Pantalla" className="img-pantalla" />

            <div className="asientos">
              <div className="filas">
                <p> </p>
                {filas.map((fila) => (
                  <p key={fila}>{fila}</p>
                ))}
              </div>

              <div className="columnas-content">
                <div className="columnas">
                  {columnas.map((columna) => (
                    <p key={columna}>{columna}</p>
                  ))}
                </div>

                <div className="asientos-icon">
                  {columnas.map((columna) =>
                    filas.map((fila) => {
                      const id = `${fila}${columna}`;
                      const ocupado = asientosOcupados.includes(id);
                      const seleccionado = asientosSeleccionados.includes(id);
                      const imgSrc = ocupado
                        ? asientoOcupado
                        : seleccionado
                        ? asientoSeleccionado
                        : asiento;
                      const altText = ocupado
                        ? "Asiento ocupado"
                        : seleccionado
                        ? "Asiento seleccionado"
                        : "Asiento libre";

                      return (
                        <button
                          key={id}
                          type="button"
                          className={`asiento ${ocupado ? "ocupado" : ""}`}
                          onClick={() => handleClickAsiento(id)}
                          disabled={ocupado}
                          aria-label={`Asiento ${id} ${altText}`}
                          style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: ocupado ? "not-allowed" : "pointer",
                          }}
                        >
                          <img src={imgSrc} alt={altText} />
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Selecciona una función para ver los asientos disponibles</p>
      )}
    </section>
  );
};


export default SeleccionDeAsientos;