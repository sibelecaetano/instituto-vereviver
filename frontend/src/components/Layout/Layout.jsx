import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2>Client Landing System</h2>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
