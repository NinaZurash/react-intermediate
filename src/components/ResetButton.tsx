import { useContextProvider } from "../providers/Provider";

export default function ResetButton() {
  const { setSum } = useContextProvider();
  const handleClick = function () {
    setSum(0);
  };

  return (
    <button onClick={handleClick} className="bg-green-500 text-amber-50">
      Reset
    </button>
  );
}
