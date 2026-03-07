import React, { useState } from 'react';
import { sendNewsletterEmail } from '../../lib/sendEmail';

const EmailForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const result = await sendNewsletterEmail(subject, message);
      setStatus(`Email enviado para ${result.successful} de ${result.total} inscritos!`);
      setSubject('');
      setMessage('');
    } catch (error) {
      setStatus('Erro: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Enviar Newsletter</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Esta mensagem será enviada para todos os emails cadastrados na newsletter.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: loading ? '#999' : '#0d9488',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Enviando...' : 'Enviar para Todos os Inscritos'}
        </button>
        {status && (
          <p style={{ color: status.includes('Erro') ? 'red' : 'green' }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default EmailForm;

