import { buttonType } from "./CustomButton/constant";

const { utility, sign: signObject, number, zero } = buttonType;
const config = ({handleClearClick, handleNegativeClick,handleEqualsClick,handleNumberClick,handlePercentClick,handleSignClick}) => [
  {
    type: utility,
    label: "AC",
    onClick: handleClearClick,
  },
  {
    type: utility,
    label: "=/-",
    onClick: handleNegativeClick,
  },
  {
    type: utility,
    label: "%",
    onClick: handlePercentClick,
  },
  {
    type: signObject,
    label: "/",
    onClick: () => handleSignClick("/"),
  },
  {
    type: number,
    label: "7",
    onClick: () => handleNumberClick("7"),
  },
  {
    type: number,
    label: "8",
    onClick: () => handleNumberClick("8"),
  },
  {
    type: number,
    label: "9",
    onClick: () => handleNumberClick("9"),
  },
  {
    type: signObject,
    label: "x",
    onClick: () => handleSignClick("x"),
  },
  {
    type: number,
    label: "4",
    onClick: () => handleNumberClick("4"),
  },
  {
    type: number,
    label: "5",
    onClick: () => handleNumberClick("5"),
  },
  {
    type: number,
    label: "6",
    onClick: () => handleNumberClick("6"),
  },
  {
    type: signObject,
    label: "-",
    onClick: () => handleSignClick("-"),
  },
  {
    type: number,
    label: "1",
    onClick: () => handleNumberClick("1"),
  },
  {
    type: number,
    label: "2",
    onClick: () => handleNumberClick("2"),
  },
  {
    type: number,
    label: "3",
    onClick: () => handleNumberClick("3"),
  },
  {
    type: signObject,
    label: "+",
    onClick: () => handleSignClick("+"),
  },
  {
    type: zero,
    label: "0",
    onClick: () => handleNumberClick("0"),
  },
  {
    type: number,
    label: ".",
    onClick: handleNumberClick,
  },
  {
    type: signObject,
    label: "=",
    onClick: handleEqualsClick,
  },
];

export default config;