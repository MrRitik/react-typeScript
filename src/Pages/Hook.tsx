import CustomHook from "../hooks/CustomHook";
import UseCall from "../hooks/UseCall";
import UseEffect from "../hooks/UseEffect"
import UseMemo from "../hooks/UseMemo";
import UseReducer from "../hooks/UseReducer";
import UseRef from "../hooks/UseRef";
import UseState from "../hooks/UseState"


const Hook = () => {
  return (
    <div>
      <h2>UseState Hook</h2>
      <UseState />
      <h2>UseEffect Hook</h2>
      <UseEffect />
      <h2>useMemo hook</h2>
      <UseMemo />
      <h2>useRef hook</h2>
      <UseRef />
      <UseCall />
      <h2>use Reduce hook</h2>
      <UseReducer />
      <h2>Cuustom Hook</h2>
      <CustomHook />
    </div>
  );
}

export default Hook
