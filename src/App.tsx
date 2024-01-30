import { Route, BrowserRouter, Routes } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";

function NotFound() {
  return <div>no page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>/ element</div>} />
        <Route path="buttons" element={<ButtonsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
