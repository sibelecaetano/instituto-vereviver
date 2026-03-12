import styles from "./MissaoVisaoValores.module.css";
import { Target, Eye, Sparkles } from "lucide-react";

export default function MissaoVisaoValores() {
  return (
    <section id="missao-visao-valores" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.title}>Missão, Visão e Valores</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Os pilares que guiam nosso trabalho e nosso compromisso com a transformação social.
          </p>
        </div>

        <div className={styles.grid}>

          {/* MISSÃO */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.missao}`}>
              <Target size={40} />
            </div>

            <h3>Missão</h3>

            <p>
              Promover o acesso à saúde ocular de qualidade, levando exames,
              diagnósticos e encaminhamentos especializados às comunidades,
              com foco na prevenção da cegueira evitável e na melhoria da
              qualidade de vida das pessoas.
            </p>
          </div>


          {/* VISÃO */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.visao}`}>
              <Eye size={40} />
            </div>

            <h3>Visão</h3>

            <p>
              Ser reconhecido como um projeto que transforma parcerias em
              cuidado humano, levando saúde visual e acolhimento a quem
              mais precisa, com respeito, empatia e compromisso social.
            </p>
          </div>


          {/* VALORES */}
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.valores}`}>
              <Sparkles size={40} />
            </div>

            <h3>Valores</h3>

            <p>
              Acessibilidade, humanização, compromisso social, excelência,
              prevenção, transparência e ética. Esses princípios orientam
              todas as nossas ações e fortalecem nosso compromisso com o
              cuidado visual e o impacto social.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}