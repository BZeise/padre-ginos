const Pizza = (props) => {
  return (
    <div
      className="pizza"
      onClick={() => {
        console.log("hi");
      }}
    >
      <h1>{props.name}</h1>
      {/* takes any valid JS expression */}
      <p>{props.description}</p>
      <img
        src={props.image ? props.image : "https://picsum.photos/200"}
        alt={props.name}
      />
    </div>
  );
};

export default Pizza;
