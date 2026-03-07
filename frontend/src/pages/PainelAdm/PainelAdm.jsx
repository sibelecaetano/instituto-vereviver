import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Users,
  Send,
  LogOut,
  ArrowRight,
  Trash2,
  Loader2
} from 'lucide-react';
import styles from './PainelAdm.module.css';
import { assertSupabase } from '../../lib/supabase';
import { sendNewsletterEmail } from '../../lib/sendEmail';

const PainelAdm = () => {
  const [activeTab, setActiveTab] = useState('enviar');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [checkingSession, setCheckingSession] = useState(true);
  const [subscribers, setSubscribers] = useState([]);
  const [totalInscritos, setTotalInscritos] = useState(0);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const navigate = useNavigate();

  const ativos = 0;
  const emailsEnviados = 0;

  const fetchSubscribers = async () => {
    setLoadingSubscribers(true);
    try {
      const supabase = assertSupabase();
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setSubscribers(data || []);
      setTotalInscritos(data?.length || 0);
    } catch (err) {
      console.error('Erro ao buscar assinantes:', err);
    } finally {
      setLoadingSubscribers(false);
    }
  };

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

        const { data: subscribersData } = await supabase
          .from('newsletter_subscribers')
          .select('*')
          .order('created_at', { ascending: false });

        if (mounted) {
          setSubscribers(subscribersData || []);
          setTotalInscritos(subscribersData?.length || 0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!subject.trim() || !message.trim()) {
      setEmailStatus({ type: 'error', message: 'Preencha o assunto e a mensagem.' });
      return;
    }

    if (subscribers.length === 0) {
      setEmailStatus({ type: 'error', message: 'Nenhum inscrito encontrado.' });
      return;
    }

    setSendingEmail(true);
    setEmailStatus(null);

    try {
      const result = await sendNewsletterEmail(subject, message);
      setEmailStatus({ type: 'success', message: `E-mail enviado com sucesso para ${result.successful} destinatario(s)!` });
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      const errorMessage = err.message || 'Erro ao enviar e-mail. Tente novamente.';
      setEmailStatus({ type: 'error', message: errorMessage });
    } finally {
      setSendingEmail(false);
    }
  };

  const handleClear = () => {
    setSubject('');
    setMessage('');
    setEmailStatus(null);
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
          onClick={() => {
            setActiveTab('inscritos');
            fetchSubscribers();
          }}
        >
          Inscritos ({totalInscritos})
        </button>
      </div>

      {activeTab === 'enviar' && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Compor Nova Atualizacao</h2>

          {emailStatus && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              backgroundColor: emailStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
              color: emailStatus.type === 'success' ? '#166534' : '#991b1b',
              border: `1px solid ${emailStatus.type === 'success' ? '#86efac' : '#fca5a5'}`
            }}>
              {emailStatus.message}
            </div>
          )}

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
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={sendingEmail}
              >
                {sendingEmail ? (
                  <>
                    <Loader2 size={18} className={styles.spin} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar para Todos
                  </>
                )}
              </button>
              <button
                type="button"
                className={styles.clearButton}
                onClick={handleClear}
                disabled={sendingEmail}
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
          {loadingSubscribers ? (
            <div className={styles.emptyState}>
              <p>Carregando...</p>
            </div>
          ) : subscribers.length === 0 ? (
            <div className={styles.emptyState}>
              <Users size={48} className={styles.emptyIcon} />
              <p>Nenhum inscrito encontrado.</p>
            </div>
          ) : (
            <div>
              <h2 className={styles.formTitle}>Lista de Inscritos ({subscribers.length})</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #334155' }}>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#000000' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#000000' }}>Data de Cadastro</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub) => (
                    <tr key={sub.id} style={{ borderBottom: '1px solid #1e293b' }}>
                      <td style={{ padding: '12px', color: '#000000' }}>{sub.email}</td>
                      <td style={{ padding: '12px', color: '#000000' }}>
                        {new Date(sub.created_at).toLocaleDateString('pt-BR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PainelAdm;
