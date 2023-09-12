import {
  useState,
  useEffect,
} from "react";

const App = () => {
  const [counter, setCounter] =
    useState(0);
  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    // perform side-effect operation
    console.log(
      "Component is mounting"
    );

    return () => {
      console.log(
        "Component is unmounting"
      );
      // on component unmount
    };
  }, []);

  const increment = () => {
    setCounter(
      (prevCounter) => prevCounter + 1
    );
  };

  const decrement = () => {
    setCounter(
      (prevCounter) => prevCounter - 1
    );
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default App;
