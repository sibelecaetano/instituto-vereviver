import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Layout from "../components/Layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
<<<<<<< Lima-Front
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
=======
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
>>>>>>> main
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
