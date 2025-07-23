const useCompra = () => {
  const registrarCompra = async (compra) => {
    const ruta = "http://192.168.100.52:8080/api";
    try {
      const response = await fetch(`${ruta}/compra`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compra),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {registrarCompra}
};


export default useCompra
