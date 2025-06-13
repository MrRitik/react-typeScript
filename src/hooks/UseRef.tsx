import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState<number>(0);


  const count = useRef<number>(0);

  useEffect(() => {
    count.current += 1;
  });

  const input = useRef<HTMLInputElement>(null);

  const btnClick = () => {
    if (input.current) {
      console.log("Input value:", input.current.value);
      input.current;
    }
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <p>Updating a ref does not trigger a component re-render.</p>

      <div>
        <button onClick={() => setValue((prev) => prev + 1)}>inc</button>
        <h2>{value}</h2>
        <button onClick={() => setValue((prev) => prev - 1)}>dec</button>
        <h3>Render count: {count.current}</h3>
        <p>
          Note: In React Strict Mode (development), `useEffect` runs twice on
          mount.
        </p>
      </div>

      <p>Accessing the DOM using useRef hook.</p>
      <input type="text" ref={input} placeholder="Type something..." />
      <button onClick={btnClick}>Click</button>
    </div>
  );
};

export default UseRef;
