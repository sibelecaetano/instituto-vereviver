// Responsável: SC
import styles from "./Topo.module.css";


export default function Topo() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo-vereviver.png" alt="Instituto Ver e Viver" />
        </div>

        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#missao-visao-valores">Missão</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
