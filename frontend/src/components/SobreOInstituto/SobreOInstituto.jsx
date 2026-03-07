import React from 'react';
import { Users, Heart, FolderOpen, Calendar } from 'lucide-react';
import styles from './SobreOInstituto.module.css';
import Logo from '../../assets/images/logo-vereviver.png';

const SobreOInstituto = () => {
  const statistics = [
    { icon: Users, number: '500+', label: 'Pessoas Beneficiadas' },
    { icon: FolderOpen, number: '20+', label: 'Projetos Realizados' },
    { icon: Calendar, number: '8', label: 'Anos de Atuação' },
    { icon: Heart, number: '100%', label: 'Compromisso Social' },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Sobre o Instituto Ver e Viver</h2>
        </div>
        
        <div className={styles.topSection}>
          <div className={styles.imageContainer}>
            <img 
              src={Logo} 
              alt="Instituto Ver e Viver" 
              className={styles.image}
            />
          </div>
          
<div className={styles.textContainer}>
  <h2 className={styles.subtitle}>Levando saúde visual a quem mais precisa</h2>

  <p className={styles.description}>
    O Instituto Ver & Viver nasceu da percepção de que muitas pessoas convivem
    com dificuldades visuais simplesmente por não terem acesso a exames
    oftalmológicos básicos. Essa realidade é ainda mais presente em comunidades
    rurais, onde o acesso à saúde costuma ser mais limitado.
  </p>

  <p className={styles.description}>
    Diante desse cenário, surgiu a iniciativa de levar atendimento oftalmológico
    diretamente até essas comunidades, aproximando o cuidado visual de quem mais
    precisa. Nosso trabalho busca identificar problemas de visão, orientar sobre
    saúde ocular e facilitar o acesso ao diagnóstico e à correção visual.
  </p>

  <p className={styles.description}>
    Hoje realizamos triagem visual, exames oftalmológicos, orientação sobre
    saúde ocular e apoio no acesso a óculos. Mais do que oferecer atendimento,
    nosso objetivo é promover qualidade de vida, inclusão social e dignidade
    por meio do cuidado com a visão.
  </p>
</div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {statistics.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <stat.icon size={28} />
                </div>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SobreOInstituto;
