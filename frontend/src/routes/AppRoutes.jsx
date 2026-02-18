import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Admin from "../pages/PainelAdm/PainelAdm";
import Layout from "../components/Layout/Layout";
import SobreOInstituto from "../components/SobreOInstituto/SobreOInstituto";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreOInstituto />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
