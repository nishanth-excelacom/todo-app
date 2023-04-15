import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increamentParentCounterByFunction(by) {
    setCount(count + by);
  }

  function decreamentParentCounterByFunction(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div className="container-fluid text-center">
      <span className="count display-1 text-primary">
        {count}
      </span>
      <CounterButton
        by={1}
        increamentParentCounterByFunction={increamentParentCounterByFunction}
        decreamentParentCounterByFunction={decreamentParentCounterByFunction}
      />
      <CounterButton
        by={2}
        increamentParentCounterByFunction={increamentParentCounterByFunction}
        decreamentParentCounterByFunction={decreamentParentCounterByFunction}
      />
      <CounterButton
        by={5}
        increamentParentCounterByFunction={increamentParentCounterByFunction}
        decreamentParentCounterByFunction={decreamentParentCounterByFunction}
      />
      <button className="btn btn-danger " onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}
