import { useState, useEffect, useMemo, useCallback } from "react";

const getArry = () => {
  for (let i = 0; i <= 1000000000; i++) {
    i++;
  }

  return ["Israfil", "Mallick"];
};

const App = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    if (isNaN(n) || typeof n !== "number") return "Please enter a Valid Number";
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);
  // const fibNumber = fib(userNumber);
  const array = useMemo(() => getArry(), []);

  useEffect(() => {
    // console.log("fibNumber changing");
    console.log("array changing");
  }, [array]);
  return (
    <div>
      <label htmlFor="number">Number input</label>
      <input
        type="text"
        id="number"
        value={userNumber}
        onChange={(e) => setUserNumber(parseInt(e.target.value) || 0)}
      />
      <p>{fibNumber}</p>
      <br />
      <label htmlFor="random">Ramdom Input</label>
      <input
        type="text"
        id="random"
        value={randomInput}
        onChange={(e) => setRandomInput(e.target.value)}
      />
    </div>
  );
};

export default App;
