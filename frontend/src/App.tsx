import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProvinceDetailPage from "./pages/ProvinceDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provincias/:slug" element={<ProvinceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}