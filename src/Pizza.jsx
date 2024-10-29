const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      {/* takes any valid JS expression */}
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
