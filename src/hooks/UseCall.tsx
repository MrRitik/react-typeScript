import React, { useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

// Correct way to define and memoize the Button component
const MemoizedButton: React.FC<ButtonProps> = React.memo(
  ({ onClick, label }) => {
    console.log(`Rendering button: ${label}`);
    return <button onClick={onClick}>{label}</button>;
  }
);

const UseCall: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>

      <MemoizedButton onClick={increment} label="Increment Count" />
      <MemoizedButton
        onClick={() => setOther((prev) => prev + 1)}
        label="Increment Other"
      />
    </div>
  );
};

export default UseCall;
