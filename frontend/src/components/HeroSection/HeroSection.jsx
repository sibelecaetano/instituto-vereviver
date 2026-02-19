import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Instituto de
          <span className={styles.highlight}>
            Transformação Social
          </span>
        </h1>

        <p className={styles.subtitle}>
          Construindo um futuro melhor através da educação, cultura e desenvolvimento social.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Entre em Contato
          </button>

          <button className={styles.secondaryButton}>
            Conheça o Instituto
          </button>
        </div>
      </div>
    </section>
  );
}
