import { useMemo, useState } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState<number>(0);
    const [count, setCount] = useState<number>(0);

    const squaredNumber = useMemo<number>(() => {
      console.log("Calculating square...");
      return number * number;
    }, [number]);
  return (
    <div>
      <h2>useMemo Example</h2>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
        <p>Squared: {squaredNumber}</p>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
        <p>Re-render count: {count}</p>
      </div>
    </div>
  );
}

export default UseMemo
