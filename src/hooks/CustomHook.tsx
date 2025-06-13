import useCounter from "./useCounter";


const CustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(5); 
  return (
    <div>
      <h2>Custom Hook: useCounter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomHook
