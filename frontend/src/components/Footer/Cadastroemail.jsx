import React, { useState } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';
import styles from './Cadastroemail.module.css';
import { supabase } from '../../lib/supabase';

const Cadastroemail = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    if (!supabase) {
      setMessage('Supabase nao configurado.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('Este email ja esta cadastrado!');
        } else {
          setMessage('Erro ao cadastrar. Tente novamente.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setMessage('Obrigado! Seu email foi cadastrado com sucesso.');
      setEmail('');
    } catch (err) {
      console.error('Cadastro error:', err);
      setMessage('Erro ao conectar. Tente novamente.');
      setStatus('error');
    }
  };

  return (
    <div className={styles.newsletter}>
      <h3 className={styles.title}>Receba nossas atualizacoes</h3>
      <p className={styles.description}>
        Inscreva-se para receber noticias e atualizacoes do instituto.
      </p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Mail className={styles.inputIcon} size={18} />
          <input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
            disabled={status === 'loading' || status === 'success'}
          />
        </div>
        
        <button 
          type="submit" 
          className={styles.button}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <Loader2 size={18} className={styles.spinner} />
          ) : status === 'success' ? (
            <Check size={18} />
          ) : (
            'Inscrever-se'
          )}
        </button>
      </form>

      {message && (
        <p className={`${styles.message} ${status === 'success' ? styles.success : styles.error}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Cadastroemail;
