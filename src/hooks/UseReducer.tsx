import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment by 2
      </button>
      <h3> count: {state.count}</h3>

      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrement by 2
      </button>
    </div>
  );
};

export default UseReducer;
