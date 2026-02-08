import React, { useState } from 'react';

const TrialModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Email submitted for trial:', email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        background: '#1e293b',
        padding: '2.5rem',
        borderRadius: '20px',
        maxWidth: '480px',
        width: '90%',
        position: 'relative',
        color: '#e2e8f0',
        boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '1.8rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#60a5fa', textAlign: 'center' }}>
          Early Access Trial
        </h2>

        {submitted ? (
          <p style={{ textAlign: 'center', fontSize: '1.4rem', color: '#22c55e', margin: '2rem 0' }}>
            Thanks! We'll notify you as soon as trials are live 🚀
          </p>
        ) : (
          <>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem', color: '#cbd5e1' }}>
              Our 7-day free trials are launching soon.<br />
              Enter your email to be first in line!
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1.2rem',
                  borderRadius: '10px',
                  border: '1px solid #475569',
                  background: '#0f172a',
                  color: 'white',
                  marginBottom: '1.5rem'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  background: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
                }}
              >
                Get Notified
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TrialModal;   // ← This line MUST be default export