type ButtonProp = {
  handleClick: (e : React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (prop: ButtonProp) => {
  return <button onClick={prop.handleClick}>Click</button>;
};

export default Button;
