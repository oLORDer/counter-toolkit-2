import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateLocalStorage from "./helpers/updateLocalStorage";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => {
    updateLocalStorage(state.counter)
    return state
  })
  const dispatch = useDispatch()

  // useEffect(() => {
  //   updateLocalStorage(counter)
  // }, [counter])



  function counterPlus() {
    dispatch({
      type: "counterPlus"
    })
  }

  function counterMinus() {
    dispatch({
      type: "counterMinus"
    })
  }

  return (
    <>
      <button type="button" onClick={ counterPlus }>Plus</button>
      <button type="button" onClick={ counterMinus }>Minus</button>
      <div>{ counter }</div>
    </>
  );
}

export default App;
