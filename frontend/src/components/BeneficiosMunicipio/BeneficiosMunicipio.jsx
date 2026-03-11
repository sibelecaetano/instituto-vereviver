import React from 'react';
import styles from './BeneficiosMunicipio.module.css';

const BeneficiosMunicipio = () => {
  return (
    <section id="beneficios" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}><span className={styles.highlight}>Benefícios</span> da Parceria para o Município</h2>
          </div>

          <div className={styles.introSection}>
            <h3 className={styles.introTitle}>Somos o Instituto <span className={styles.boldText}>Ver e Viver</span>, levamos exames oftalmológicos, consultas e atendimentos humanizados em parceria com secretarias de saúde e prefeituras.</h3>
          </div>

          <div>
            <h3 className={styles.partnershipTitle}>Efetivando parceria, o município recebe:</h3>
          </div>
          
          <div className={styles.benefitsList}>
            <ul className={styles.list}>
              <li>
                <span className={styles.boldText}>Doação</span> de óculos para crianças carentes;
              </li>
              <li>
                Reconhecimento e <span className={styles.boldText}>premiação</span> para agentes de saúde;
              </li>
              <li>
                <span className={styles.boldText}>Redução</span> ou eliminação de filas de espera;
              </li>
              <li>
                Mais <span className={styles.boldText}>visibilidade</span> política e institucional;
              </li>
              <li>
                Melhoria nos indicadores de <span className={styles.boldText}>saúde</span> visual;
              </li>
              <li>
                <span className={styles.boldText}>Aproximação</span> real entre gestão pública e comunidade
              </li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <p className={styles.contactText}>
              <span className={styles.greenText}>Prefeito(a), Secretário(a)</span> <span className={styles.boldGreenText}>entre em contato:</span>
            </p>
            <a href="#contato" className={styles.contactButton}>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosMunicipio;


