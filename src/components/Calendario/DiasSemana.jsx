const DiasSemana = ({ diasDeLaSemana }) => {
  return (
    <div className="diasSemana">
      {diasDeLaSemana.map((dia, index) => (
        <div key={index} className="dia">
          <p>{dia}</p>
        </div>
      ))}
    </div>
  );
};

export default DiasSemana;
