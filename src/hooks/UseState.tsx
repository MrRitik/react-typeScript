import { useState } from "react";


const UseState = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
    const decrement = () => {
      setCount((prevCount) => prevCount - 1);
    };
  return (
    <div>
      <button onClick={decrement}>decrement</button>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState
