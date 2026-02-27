import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PainelAdm from "../pages/PainelAdm/PainelAdm";
import Login from "../pages/Login/Login";
import Layout from "../components/Layout/Layout";
import SobreOInstituto from "../components/SobreOInstituto/SobreOInstituto";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PainelAdm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}