import React from 'react';
import { Users, Heart, FolderOpen, Calendar } from 'lucide-react';
import styles from './SobreOInstituto.module.css';

const SobreOInstituto = () => {
  const statistics = [
    { icon: Users, number: '500+', label: 'Pessoas Beneficiadas' },
    { icon: Heart, number: '150+', label: 'Voluntários Ativos' },
    { icon: FolderOpen, number: '20+', label: 'Projetos Realizados' },
    { icon: Calendar, number: '8', label: 'Anos de Atuação' },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Sobre o Instituto</h2>
        </div>
        
        <div className={styles.topSection}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Instituto Social" 
              className={styles.image}
            />
          </div>
          
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>Transformando projetos em coisas reais</h2>
            <p className={styles.description}>
              O Instituto Social é uma organização sem fins lucrativos dedicada a transformar 
              vidas através de projetos sociais inovadores. Há mais de 8 anos, trabalhamos 
              para criar oportunidades e promover o desenvolvimento sustentável nas comunidades 
              mais necessitadas.
            </p>
            <p className={styles.description}>
              Nossa missão é promover a inclusão social, a educação e o bem-estar de crianças, 
              jovens e adultos, oferecendo programas abrangentes que abordam as root causes 
              da pobreza e da exclusão social.
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
