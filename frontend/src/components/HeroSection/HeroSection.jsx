import styles from "./HeroSection.module.css"
import { ArrowDown } from "lucide-react"
import heroImage from "../../assets/images/hero.png"

export default function HeroSection() {

  const scrollToContato = () => {
    document.querySelector("#contato")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const scrollToSobre = () => {
    document.querySelector("#sobre")?.scrollIntoView({
      behavior: "smooth"
    })
  }

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

          <button
            className={styles.primaryButton}
            onClick={scrollToContato}
          >
            Entre em Contato
          </button>

          <button
            className={styles.secondaryButton}
            onClick={scrollToSobre}
          >
            Conheça o Instituto
          </button>

        </div>
      </div>

      <div className={styles.fade}></div>

      <div className={styles.arrow}>
        <ArrowDown size={36} strokeWidth={1.5}/>
      </div>

    </section>
  )
}