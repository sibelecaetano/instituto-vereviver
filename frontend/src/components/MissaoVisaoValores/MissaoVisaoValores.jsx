import styles from "./MissaoVisaoValores.module.css";

import missaoImg from "../../assets/images/missao.png";
import visaoImg from "../../assets/images/visao.png";
import valoresImg from "../../assets/images/valores.png";

export default function MissaoVisaoValores() {
  return (
    <section id="missao-visao-valores" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Missão, Visão e Valores</h2>
          <div className={styles.divider}></div>
          <p>
            Os pilares que orientam nossas ações e fortalecem nosso compromisso
            com a saúde visual e o impacto social.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Missão</h3>
              <div className={styles.line}></div>
              <p>
                Promover o <span>acesso à saúde ocular de qualidade</span>, levando
                exames, diagnósticos e encaminhamentos especializados às comunidades,
                com foco na <span>prevenção da cegueira evitável</span> e na
                <span> melhoria da qualidade de vida</span> das pessoas.
              </p>
            </div>
            <div className={styles.image}>
              <img src={missaoImg} alt="Missão Instituto Ver e Viver"/>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Visão</h3>
              <div className={styles.line}></div>
              <p>
                Ser reconhecido como um projeto que
                <span> transforma parcerias em cuidado humano</span>,
                levando <span>saúde visual e acolhimento</span> a quem mais
                precisa, com <span>respeito, empatia e compromisso social</span>.
              </p>
            </div>
            <div className={styles.image}>
              <img src={visaoImg} alt="Visão Instituto Ver e Viver"/>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Valores</h3>
              <div className={styles.line}></div>
              <ul>
                <li>
                  <strong>Acessibilidade</strong>
                  Garantir que todos tenham direito a um cuidado visual digno e de qualidade.
                </li>
                <li>
                  <strong>Humanização</strong>
                  Tratar cada paciente com respeito, empatia e acolhimento.
                </li>
                <li>
                  <strong>Compromisso social</strong>
                  Atuar em parceria com municípios, secretarias e profissionais
                  para ampliar o alcance da saúde visual.
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <img src={valoresImg} alt="Valores Instituto Ver e Viver"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}