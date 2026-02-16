import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
