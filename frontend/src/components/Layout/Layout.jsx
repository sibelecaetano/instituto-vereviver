import { Outlet } from "react-router-dom";
import Topo from "../Topo/Topo";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Topo />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
