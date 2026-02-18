import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Layout from "../components/Layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
