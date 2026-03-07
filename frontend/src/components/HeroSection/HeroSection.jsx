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
          Instituto
          <span className={styles.highlight}>
            Ver & Viver
          </span>
        </h1>

        <p className={styles.subtitle}>
          Levamos atendimento oftalmológico a comunidades que muitas vezes não
          têm acesso ao cuidado visual. Nosso compromisso é levar saúde,
          dignidade e qualidade de vida principalmente às populações rurais.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Entre em Contato
          </button>

          <button className={styles.secondaryButton}>
            Conheça o Projeto
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