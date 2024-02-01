import BlueButton from "../components/BlueButton";
import RedButton from "../components/RedButton";
import ResetButton from "../components/ResetButton";

export default function ButtonsPage() {
  return (
    <div className="w-full justify-center">
      <BlueButton />

      <div>
        <RedButton />
        <RedButton />
        <RedButton />
        <RedButton />
        <RedButton />
        <RedButton />
      </div>
      <ResetButton />
    </div>
  );
}
