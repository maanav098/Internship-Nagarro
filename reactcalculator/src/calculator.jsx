import "./App.css";
import React, { useState } from "react";
import CustomButton from "./CustomButton/CustomButton";
import config from "./config";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [isFirstValue, setIsFirstValue] = useState(true);
  const [secondValue, setSecondValue] = useState("");
  const [resultValue, setResultValue] = useState(0);
  const [sign, setSign] = useState("");

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

  const resetCalculator = () => {
    setFirstValue("");
    setIsFirstValue(true);
    setSecondValue("");
    setResultValue(0);
    setSign("");
  };

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

  const handleClearClick = () => {
    resetCalculator();
    setResultValue(0);
  };

  const handlePercentClick = () => {
    if (isFirstValue) {
      setFirstValue((parseFloat(firstValue) / 100).toString());
    } else {
      setSecondValue((parseFloat(secondValue) / 100).toString());
    }
  };

  const handleNegativeClick = () => {
    if (isFirstValue) {
      setFirstValue((parseFloat(firstValue) * -1).toString());
    } else {
      setSecondValue((parseFloat(secondValue) * -1).toString());
    }
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
        {config({
          handleClearClick,
          handleNegativeClick,
          handleEqualsClick,
          handleNumberClick,
          handlePercentClick,
          handleSignClick,
        }).map(({ type, label, onClick }) => {
          return <CustomButton type={type} label={label} onClick={onClick} />;
        })}
      </div>
    </div>
  );
};

export default Calculator;
