import { useState } from "react";

export default function RedButton() {
  const [count, setCount] = useState(0);
  const handleClick = function () {
    setCount((prev) => prev + 1);
  };
  return (
    <button onClick={handleClick} className="bg-red-600 w-20 m-1">
      {count}
    </button>
  );
}
