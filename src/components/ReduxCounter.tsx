import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { decrement, increment, incrementByAmount } from "../slices/CounterSlice";
import { useState } from "react";

const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
    <input type="Number" value={amount} onChange={(e)=> setAmount(Number(e.target.value))}/>
      <button onClick={()=> dispatch(incrementByAmount(amount))}>Increment by amount</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
