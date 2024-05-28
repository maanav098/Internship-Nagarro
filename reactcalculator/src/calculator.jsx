
import './App.css';
import React,{useState} from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [isFirstValue, setIsFirstValue] = useState(true);
  const [secondValue, setSecondValue] = useState("");
  const [resultValue, setResultValue] = useState(0);
  const [sign, setSign] = useState("");

  const handleNumberClick = (value) => {
    if (isFirstValue) {
      if (value === "." && firstValue.includes(".")) return;
      setFirstValue(firstValue + value);
    } else {
      if (value === "." && secondValue.includes(".")) return;
      setSecondValue(secondValue + value);
    }
  };

  const handleSignClick = (value) => {
    if (firstValue !== "" && secondValue === "") {
      setSign(value);
      setIsFirstValue(false);
    }
  };

  const handleEqualsClick = () => {
    if (secondValue !== "") {
      calculateResult();
      setIsFirstValue(true);
    }
  };

  const calculateResult = () => {
    if (firstValue !== "" && secondValue !== "") {
      const firstNum = parseFloat(firstValue);
      const secondNum = parseFloat(secondValue);
      let calcResult = 0;

      if (sign === "+") {
        calcResult = firstNum + secondNum;
      } else if (sign === "-") {
        calcResult = firstNum - secondNum;
      } else if (sign === "x") {
        calcResult = firstNum * secondNum;
      } else if (sign === "/") {
        if (secondNum === 0) {
          setResultValue("Error");
          resetCalculator();
          return;
        }
        calcResult = firstNum / secondNum;
      }

      setResultValue(calcResult);
      setFirstValue(calcResult.toString());
      setSecondValue("");
      setIsFirstValue(true);
    }
  };

  const handleClearClick = () => {
    setResultValue(0);
    resetCalculator();
  };

  const handleNegativeClick = () => {
    if (isFirstValue) {
      setFirstValue((parseFloat(firstValue) * -1).toString());
    } else {
      setSecondValue((parseFloat(secondValue) * -1).toString());
    }
  };

  const handlePercentClick = () => {
    if (isFirstValue) {
      setFirstValue((parseFloat(firstValue) / 100).toString());
    } else {
      setSecondValue((parseFloat(secondValue) / 100).toString());
    }
  };

  const handleDecimalClick = () => {
    handleNumberClick(".");
  };

  const resetCalculator = () => {
    setFirstValue("");
    setIsFirstValue(true);
    setSecondValue("");
    setResultValue(0);
    setSign("");
  };

  let displayValue;
  if (isFirstValue) {
    displayValue = firstValue || 0;
  } else {
    displayValue = secondValue || resultValue;
  }

  return (
    <div className="container">
      <div className="result">
        <span>{displayValue}</span>
      </div>
      <div className="buttons">
        <button className="button1 clear" onClick={handleClearClick}>
          AC
        </button>
        <button className="button1 negative" onClick={handleNegativeClick}>
          +/-
        </button>
        <button className="button1 percent" onClick={handlePercentClick}>
          %
        </button>
        <button className="button2 sign" onClick={() => handleSignClick("/")}>
          /
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button className="button2 sign" onClick={() => handleSignClick("x")}>
          x
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button className="button2 sign" onClick={() => handleSignClick("-")}>
          -
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="button3 number"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button className="button2 sign" onClick={() => handleSignClick("+")}>
          +
        </button>
        <button
          className="button3 number zero"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button className="button3 dot" onClick={handleDecimalClick}>
          .
        </button>
        <button className="button2 equal" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
};


export default Calculator;
