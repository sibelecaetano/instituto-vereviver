import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';
import Cadastroemail from './Cadastroemail';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletterSection}>
          <Cadastroemail />
        </div>

        <div className={styles.columnsWrapper}>
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <Heart className={styles.heartIcon} size={28} />
              <h3 className={styles.logoTitle}>Instituto Ver&Viver</h3>
            </div>
            <p className={styles.bioText}>
              Transformando vidas.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={18} />
                <span>(85) 9 9983-2504</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={18} />
                <span>projetosocialvereviver01@gmail.com</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links Rápidos</h3>
            <ul className={styles.linksList}>
              <li><a href="#sobre" className={styles.link}>Sobre o Instituto</a></li>
              <li><a href="#missao-visao-valores" className={styles.link}>Missão, Visão e Valores</a></li>
              <li><a href="#servicos" className={styles.link}>Nossos Serviços</a></li>
              <li><a href="#nossa-galeria" className={styles.link}>Galeria</a></li>
              <li><a href="#contato" className={styles.link}>Contato</a></li>
              <li><a href="/login" className={styles.link}>Painel Administrativo</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} Instituto Ver&Viver</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
