import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columnsWrapper}>
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <Heart className={styles.heartIcon} size={28} />
              <h3 className={styles.logoTitle}>Instituto</h3>
            </div>
            <p className={styles.bioText}>
              Transformando vidas através da educação, cultura e desenvolvimento social.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={18} />
                <span>Rua Exemplo, 123 - São Paulo/SP</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={18} />
                <span>(11) 9999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={18} />
                <span>contato@instituto.org.br</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links Rápidos</h3>
            <ul className={styles.linksList}>
              <li><a href="/sobre" className={styles.link}>Sobre o Instituto</a></li>
              <li><a href="/missao" className={styles.link}>Missão, Visão e Valores</a></li>
              <li><a href="/projetos" className={styles.link}>Nossos Projetos</a></li>
              <li><a href="/galeria" className={styles.link}>Galeria</a></li>
              <li><a href="/contato" className={styles.link}>Contato</a></li>
<li><a href="/login" className={styles.link}>Painel Administrativo</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} Instituto de Transformação Social</p>
            <p className={styles.developedText}>Desenvolvido com ❤️ para fazer a diferença.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
