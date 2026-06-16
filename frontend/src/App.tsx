import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/appLayout";
import Home from "./pages/home";
import ProvinceDetailPage from "./pages/ProvinceDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/provincias/:slug" element={<ProvinceDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}