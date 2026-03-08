// Responsável: SC
import { useEffect, useState } from "react"
import styles from "./Topo.module.css"
import logo from "../../assets/images/logo-vereviver.png"

export default function Topo() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <img src={logo} alt="Instituto Ver & Viver"/>
        </div>

        <nav className={styles.nav}>
          <a href="#missao-visao-valores">Missão</a>
          <a href="#servicos">Serviços</a>
          <a href="#nossa-galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

      </div>
    </header>
  )
}