import { useEffect, useState } from "react";
import { useContextProvider } from "../providers/Provider";

export default function RedButton() {
  const [count, setCount] = useState(0);
  const { sum, setSum } = useContextProvider();
  const handleClick = function () {
    setCount((prev) => prev + 1);
    setSum((prev) => prev + 1);
  };
  useEffect(() => {
    if (sum === 0) setCount(0);
  }, [sum]);
  return (
    <button onClick={handleClick} className="bg-red-600 w-20 m-1">
      {count}
    </button>
  );
}
