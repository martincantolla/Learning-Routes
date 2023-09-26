import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactoPage from "./components/ContactoPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
