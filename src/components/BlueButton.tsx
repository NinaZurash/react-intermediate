import { useContextProvider } from "../providers/Provider";

export default function BlueButton() {
  const { sum, setSum } = useContextProvider();
  const handleClick = function () {
    setSum((prev) => prev + 1);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-900 text-amber-50 mx-auto flex"
    >
      {sum}
    </button>
  );
}
