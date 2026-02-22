import { Outlet } from "react-router-dom";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <Topo />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}