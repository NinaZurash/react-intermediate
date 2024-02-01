import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";
import { ContextProvider } from "./providers/Provider";

function NotFound() {
  return <div>no page</div>;
}

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/buttons" />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
