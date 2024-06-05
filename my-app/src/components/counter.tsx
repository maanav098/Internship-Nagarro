import { useState } from 'react';
import style from "../styles/style.module.css";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from '../reducer/counterSlice';
import {selectCount} from './Selector'

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const handleDecrement = (value: any) => () => {
    dispatch(decrement(value));
  };

  const handleIncrement = () => () => {
    dispatch(increment());
  };

  const handleIncrementByAmount = (value : any) => () => {
    dispatch(incrementByAmount(value));
  };

  const handleIncrementAsync = (value : any) => () => {
    dispatch(incrementAsync(value));
  };

  return (
    <div>
      <div className={style.row}>
        <button
          className={style.button}
          aria-label="Decrement value"
          onClick={handleDecrement(incrementValue)}
        >
          -
        </button>
        <span className={style.value}>{count}</span>
        <button
          className={style.button}
          aria-label="Increment value"
          onClick={handleIncrement()}
        >
          +
        </button>
      </div>
      <div className={style.row}>
        <input
          className={style.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={style.button}
          onClick={handleIncrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={style.asyncButton}
          onClick={handleIncrementAsync(incrementValue)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
