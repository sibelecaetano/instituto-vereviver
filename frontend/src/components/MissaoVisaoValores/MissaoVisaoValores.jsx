import styles from "./MissaoVisaoValores.module.css";
import { Target, Eye, Sparkles } from "lucide-react";

export default function MissaoVisaoValores() {
  return (
    <section id="missao-visao-valores" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Missão, Visão e Valores</h2>
          <div className={styles.divider}></div>
          <p>
            Os pilares que guiam nosso trabalho e nosso compromisso com a transformação social.
          </p>
        </div>

        <div className={styles.grid}>

          {/* MISSÃO */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.missao}`}>
              <Target size={30} color="white" />
            </div>

            <h3>Missão</h3>
            <p>
              Promover o acesso à saúde ocular de qualidade, levando exames, diagnósticos e orientação especializada às comunidades que mais precisam.
            </p>
          </div>

          {/* VISÃO */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.visao}`}>
              <Eye size={30} color="white" />
            </div>

            <h3>Visão</h3>
            <p>
              Ser reconhecido como um projeto que transforma parcerias em cuidado humano, levando saúde visual e acolhimento com respeito e compromisso social.
            </p>
          </div>

          {/* VALORES */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.valores}`}>
              <Sparkles size={30} color="white" />
            </div>

            <h3>Valores</h3>
            <p>
              Excelência, prevenção, transparência, ética, acessibilidade e compromisso social em todas as nossas ações.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
