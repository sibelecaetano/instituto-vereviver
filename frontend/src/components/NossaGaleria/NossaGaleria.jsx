// Responsável: SC
import styles from "./NossaGaleria.module.css";

export default function NossaGaleria() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Galeria de Fotos</h2>
          <div className={styles.divider}></div>
          <p>
            Momentos que refletem nosso compromisso com a transformação social.
          </p>
        </div>

        <div className={styles.grid}>
          <img src="URL1" alt="" />
          <img src="URL2" alt="" />
          <img src="URL3" alt="" />
          <img src="URL4" alt="" />
          <img src="URL5" alt="" />
          <img src="URL6" alt="" />
        </div>

      </div>
    </section>
  );
}
