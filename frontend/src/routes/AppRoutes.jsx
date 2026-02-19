import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PainelAdm from "../pages/PainelAdm";
import Layout from "../components/Layout/Layout";
import SobreOInstituto from "../components/SobreOInstituto/SobreOInstituto";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<PainelAdm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
