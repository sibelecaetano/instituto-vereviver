import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import styles from './Contato.module.css';

const Contato = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Replace with your WhatsApp number
    const message = 'Olá! Gostaria de mais informações sobre o instituto.'; // Default message
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
              <MapPin size={24} />
            </div>
            <h3 className={styles.cardTitle}>Endereço</h3>
            <p className={styles.cardText}>Rua Example, 123 - São Paulo, SP</p>
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

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Siga-nos nas Redes Sociais</h3>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
