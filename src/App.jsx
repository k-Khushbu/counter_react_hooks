import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 5;

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    console.log(counter);
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const decreaseCounter = () => {
    console.log(counter);
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>React hooks example</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  );
}

export default App;
