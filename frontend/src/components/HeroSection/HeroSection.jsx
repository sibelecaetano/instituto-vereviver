import styles from "./HeroSection.module.css";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      
      {/* Background */}
      <div className={styles.background}></div>

      {/* Overlay escuro */}
      <div className={styles.overlay}></div>

      {/* Conteúdo */}
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

      {/* Fade inferior */}
      <div className={styles.fade}></div>

      {/* Seta */}
      <div className={styles.arrow}>
        <ArrowDown size={36} strokeWidth={1.5} />
      </div>

    </section>
  );
}