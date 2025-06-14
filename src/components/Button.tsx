type ButtonProp = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  count: number;
};

const CustomButton = (prop: ButtonProp) => {
  return (
    <div>
        <p>count : {prop.count}</p>
      <button
        onClick={prop.handleClick}
        style={{ background: "red", color: "white" }}
      >
        Click
      </button>
      
    </div>
  );
};

export default CustomButton;
