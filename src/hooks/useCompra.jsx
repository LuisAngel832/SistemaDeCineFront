const useCompra = () => {
  const registrarCompra = async (compra) => {
    console.log(compra);
    try {
      const response = await fetch("http://localhost:8080/api/compra", {
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
