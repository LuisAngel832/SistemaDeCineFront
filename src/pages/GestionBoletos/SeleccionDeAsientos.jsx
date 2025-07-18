import pantalla from "./../../assets/img/pantalla.png";
import asiento from "./../../assets/img/asiento.png";
import asientoSeleccionado from "./../../assets/img/asientoSeleccionado.png";
import asientoOcupado from "./../../assets/img/asientoOcupado.png";
import HeaderSeleccionDeAsientos from "./HeaderSeleccionAsientos";
import { useEffect, useState } from "react";
const SeleccionDeAsientos = ({ funcion, setCompraBody, compraBody, asientosOcupados, setAsientosOcupados  }) => {
  const filas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const columnas = ["A ", "B ", "C ", "D ", "E ", "F ", "G ", "H "];
  const [cantidadAsientos, setCantidadAsientos] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  useEffect(() => {
    setAsientosOcupados(funcion.boletosVendidos?.map((b) => b.codigoAsiento));
    setPrecioTotal(0);
    setCantidadAsientos(0);
    setAsientosSeleccionados([]);
  }, [funcion]);

  useEffect(() => {
    setCompraBody({
      ...compraBody,
      boletos: asientosSeleccionados,
      monto: precioTotal,
    });
  }, [asientosSeleccionados]);

  const handleClickAsiento = (id) => {
    let nuevosAsientos;

    if (asientosOcupados.includes(id) || asientosSeleccionados.includes(id)) {
      nuevosAsientos = asientosSeleccionados.filter(
        (asiento) => asiento !== id
      );
    } else {
      nuevosAsientos = [...asientosSeleccionados, id];
      const nuevoPrecioTotal = funcion.precioBoleto * nuevosAsientos.length;

      setCantidadAsientos(cantidadAsientos + 1);
      setAsientosSeleccionados(nuevosAsientos);
      setPrecioTotal(nuevoPrecioTotal);

      setCompraBody({
        ...compraBody,
        boletos: nuevosAsientos,
        monto: nuevoPrecioTotal,
      });
    }
  };

  return (
    <section className="funciones-content">
      {Object.keys(funcion).length > 0 ? (
        <>
          {/* header de asientos */}
          <HeaderSeleccionDeAsientos
            cantidadAsientos={cantidadAsientos}
            precioTotal={precioTotal}
          />

          <div className="seleccionarAsientos-contenido">
            <img src={pantalla} alt="pantalla" className="img-pantalla" />

            <div className="asientos">
              <div className="filas">
                <p> </p>
                {filas.map((fila) => {
                  return <p key={fila}>{fila}</p>;
                })}
              </div>

              <div className="columnas-content">
                <div className="columnas">
                  {columnas.map((columna) => {
                    return <p key={columna}>{columna}</p>;
                  })}
                </div>

                {asientosOcupados ? (
                  <div className="asientos-icon">
                    {columnas?.map((columna) => {
                      return filas.map((fila) => {
                        const asientoId = `${fila}${columna.trim()}`;
                        let asientoImgSrc;
                        if (asientosOcupados?.includes(asientoId)) {
                          asientoImgSrc = asientoOcupado;
                        } else if (asientosSeleccionados.includes(asientoId)) {
                          asientoImgSrc = asientoSeleccionado;
                        } else {
                          asientoImgSrc = asiento;
                        }
                        return (
                          <button
                            type="button"
                            className={`asiento ${
                              asientoImgSrc === asientoOcupado ? "ocupado" : ""
                            }`}
                            onClick={() => handleClickAsiento(asientoId)}
                            key={asientoId}
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                            }}
                            aria-label={`Seleccionar asiento ${columna.trim()}${fila}`}
                          >
                            <img
                              className={`${
                                asientoImgSrc === asientoOcupado
                                  ? "ocupado"
                                  : ""
                              }`}
                              src={asientoImgSrc}
                              alt=""
                            />
                          </button>
                        );
                      });
                    })}
                  </div>
                ) : (
                  <p>Selecciona una funcion</p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p> Selecciona una funcion</p>
      )}
    </section>
  );
};

export default SeleccionDeAsientos;
