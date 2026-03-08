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
          <a href="#missao-visao-valores">Missão</a>
          <a href="#servicos">Serviços</a>
          <a href="#nossa-galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
