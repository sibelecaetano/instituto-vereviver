import React from 'react';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import styles from './Contato.module.css';

const Contato = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; 
    const message = 'Olá! Gostaria de mais informações sobre o instituto.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <div className={styles.titleBar}></div>
          <p className={styles.subtitle}>
            Estamos prontos para atender você. Entre em contato por qualquer um dos canais abaixo.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Phone size={24} />
            </div>
            <h3 className={styles.cardTitle}>Telefone</h3>
            <p className={styles.cardText}>(11) 99999-9999</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <h3 className={styles.cardTitle}>E-mail</h3>
            <p className={styles.cardText}>contato@institutosocial.org.br</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Instagram size={24} />
            </div>
            <h3 className={styles.cardTitle}>Instagram</h3>
            <a 
              href="https://www.instagram.com/instituto_vereviver" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              @instituto_vereviver
            </a>
          </div>
        </div>

        <div className={styles.whatsappBanner}>
          <div className={styles.whatsappContent}>
            <h3 className={styles.whatsappTitle}>Fale Conosco pelo WhatsApp</h3>
            <p className={styles.whatsappText}>
              Tire suas dúvidas de forma rápida e prática pelo nosso WhatsApp.
            </p>
            <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
              <MessageCircle size={20} className={styles.whatsappIcon} />
              Abrir WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
