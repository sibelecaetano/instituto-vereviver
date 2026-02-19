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
              Promover a inclusão social e o desenvolvimento integral de crianças, jovens e famílias 
              em situação de vulnerabilidade, através de ações educacionais, culturais e assistenciais.
            </p>
          </div>

          {/* VISÃO */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.visao}`}>
              <Eye size={30} color="white" />
            </div>

            <h3>Visão</h3>
            <p>
              Ser referência nacional em projetos sociais transformadores, reconhecidos pela excelência 
              no atendimento e impacto positivo na vida das comunidades.
            </p>
          </div>

          {/* VALORES */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.valores}`}>
              <Sparkles size={30} color="white" />
            </div>

            <h3>Valores</h3>
            <p>
              Transparência, ética, respeito à dignidade humana, trabalho em equipe, inovação social, 
              sustentabilidade e inclusão para todos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
