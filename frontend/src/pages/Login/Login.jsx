import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import styles from './Login.module.css';
import { assertSupabase } from '../../lib/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const supabase = assertSupabase();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Falha ao autenticar.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Lock size={32} className={styles.lockIcon} />
          </div>
          <h1 className={styles.title}>Area Administrativa</h1>
          <p className={styles.subtitle}>Acesse o painel de controle</p>
        </div>

        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>E-mail</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Senha</label>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type="password"
                  id="password"
                  className={styles.input}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error ? <p className={styles.subtitle}>{error}</p> : null}

            <button type="submit" className={styles.button} disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>

        <div className={styles.footer}>
          <a href="/" className={styles.backLink}>
            <ArrowLeft size={18} />
            Voltar para o site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
