import styles from "./HeroSection.module.css"
import { ArrowDown } from "lucide-react"
import heroImage from "../../assets/images/hero.png"

export default function HeroSection() {

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
      id="topo"
    >

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Instituto
          <span className={styles.highlight}>
            Ver & Viver
          </span>
        </h1>

        <p className={styles.subtitle}>
          Levamos cuidado com a visão através de atendimentos oftalmológicos
          e iniciativas que transformam a forma de enxergar o mundo.
        </p>

        <div className={styles.buttons}>

          <a
            href="#contato"
            className={styles.primaryButton}
          >
            Entre em Contato
          </a>

          <a
            href="#sobre"
            className={styles.secondaryButton}
          >
            Conheça o Instituto
          </a>

        </div>
      </div>

      <div className={styles.fade}></div>

      {/* SETA CLICÁVEL */}

      <a href="#sobre" className={styles.arrow}>
        <ArrowDown size={36} strokeWidth={1.5}/>
      </a>

    </section>
  )
}