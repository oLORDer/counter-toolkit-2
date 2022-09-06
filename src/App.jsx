// import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import updateLocalStorage from './helpers/updateLocalStorage';
import { increment, decrement } from './redux/toolkit/slice';

import './App.css';

function App() {
  const { counter } = useSelector((state) => {
    updateLocalStorage(state.counter);
    return state;
  });
  const dispatch = useDispatch();
  console.log(increment, decrement);
  function counterPlus() {
    dispatch(increment());
  }

  function counterMinus() {
    dispatch(decrement());
  }

  return (
    <div className="container">
      <button type="button" onClick={counterPlus}>
        Plus
      </button>
      <button type="button" onClick={counterMinus}>
        Minus
      </button>
      <p>Count:</p>
      <span>{counter}</span>
    </div>
  );
}

export default App;
