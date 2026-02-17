import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/PainelAdm";
import Layout from "../components/Layout/Layout";
import SobreOInstituto from "../components/SobreOInstituto/SobreOInstituto";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sobre" element={<SobreOInstituto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
