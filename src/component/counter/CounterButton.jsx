import { propTypes } from "react-bootstrap/esm/Image";

export default function CounterButton({
  by,
  increamentParentCounterByFunction,
  decreamentParentCounterByFunction,
}) {
  return (
    <div className="CounterButton">
      <button
        className="counterButton btn btn-warning m-1 bor"
        onClick={() => increamentParentCounterByFunction(by)}
      >
        +{by}
      </button>
      <button
        className="counterButton btn btn-dark m-1"
        onClick={() => decreamentParentCounterByFunction(by)}
      >
        -{by}
      </button>
    </div>
  );
}

CounterButton.propTypes = {
  by: propTypes.number,
};

CounterButton.defaultProp = {
  by: 5,
};
