import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Users,
  Send,
  LogOut,
  ArrowRight,
  Trash2
} from 'lucide-react';
import styles from './PainelAdm.module.css';
import { assertSupabase } from '../../lib/supabase';

const PainelAdm = () => {
  const [activeTab, setActiveTab] = useState('enviar');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [checkingSession, setCheckingSession] = useState(true);
  const navigate = useNavigate();

  const totalInscritos = 0;
  const ativos = 0;
  const emailsEnviados = 0;

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        const supabase = assertSupabase();
        const { data, error } = await supabase.auth.getSession();

        if (error || !data.session) {
          navigate('/login', { replace: true });
          return;
        }
      } catch {
        navigate('/login', { replace: true });
        return;
      } finally {
        if (mounted) {
          setCheckingSession(false);
        }
      }
    }

    checkSession();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando para:', totalInscritos, 'inscritos');
    console.log('Assunto:', subject);
    console.log('Mensagem:', message);
  };

  const handleClear = () => {
    setSubject('');
    setMessage('');
  };

  const handleVerSite = () => {
    navigate('/');
  };

  const handleSair = async () => {
    try {
      const supabase = assertSupabase();
      await supabase.auth.signOut();
    } finally {
      navigate('/login', { replace: true });
    }
  };

  if (checkingSession) {
    return <div className={styles.container}>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <Mail size={24} />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>Painel Administrativo</h1>
            <p className={styles.headerSubtitle}>Gerenciar e-mails e inscritos</p>
          </div>
        </div>

        <div className={styles.headerRight}>
          <button
            className={styles.headerButton}
            onClick={handleVerSite}
          >
            <ArrowRight size={16} />
            Ver Site
          </button>
          <button
            className={styles.headerButton}
            onClick={handleSair}
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </header>

      <div className={styles.cardsGrid}>
        <div className={`${styles.card} ${styles.cardBlue}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Total de Inscritos</h3>
            <p className={styles.cardValue}>{totalInscritos}</p>
          </div>
          <div className={styles.cardIcon}>
            <Users size={28} />
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardGreen}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Ativos</h3>
            <p className={styles.cardValue}>{ativos}</p>
          </div>
          <div className={styles.cardIcon}>
            <Mail size={28} />
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>E-mails Enviados</h3>
            <p className={styles.cardValue}>{emailsEnviados}</p>
          </div>
          <div className={styles.cardIcon}>
            <Send size={28} />
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'enviar' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('enviar')}
        >
          Enviar E-mail
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'inscritos' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('inscritos')}
        >
          Inscritos ({totalInscritos})
        </button>
      </div>

      {activeTab === 'enviar' && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Compor Nova Atualizacao</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Assunto do E-mail
              </label>
              <input
                type="text"
                id="subject"
                className={styles.input}
                placeholder="Ex: Novidades incriveis para voce!"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Conteudo do E-mail
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="Escreva sua mensagem aqui..."
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <p className={styles.infoText}>
              Esta mensagem sera enviada para {totalInscritos} inscrito(s)
            </p>

            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                <Send size={18} />
                Enviar para Todos
              </button>
              <button
                type="button"
                className={styles.clearButton}
                onClick={handleClear}
              >
                <Trash2 size={18} />
                Limpar
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'inscritos' && (
        <div className={styles.formCard}>
          <div className={styles.emptyState}>
            <Users size={48} className={styles.emptyIcon} />
            <p>Nenhum inscrito encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PainelAdm;
