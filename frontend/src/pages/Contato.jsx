import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with real API call
    setTimeout(() => {
      console.log('Contact form:', formData);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Responderemos em breve. Obrigado pelo contato!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 12px',
        background: 'var(--bg-subtle)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            Entre em Contato
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            Estamos prontos para ouvir você. Envie sua mensagem ou dúvida!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '64px 12px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '32px'
              }}>
                Informações de Contato
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="network-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      background: 'var(--brand-primary)',
                      padding: '12px',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      <MapPin size={24} color="var(--brand-dark)" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}>
                        Endereço
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Rua das Flores, 123<br />
                        Jardim Esperança<br />
                        São Paulo, SP - 01234-567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="network-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      background: 'var(--brand-primary)',
                      padding: '12px',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      <Mail size={24} color="var(--brand-dark)" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}>
                        Email
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        contato@vidaemmovimento.org<br />
                        doacoes@vidaemmovimento.org
                      </p>
                    </div>
                  </div>
                </div>

                <div className="network-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      background: 'var(--brand-primary)',
                      padding: '12px',
                      borderRadius: '12px',
                      flexShrink: 0
                    }}>
                      <Phone size={24} color="var(--brand-dark)" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}>
                        Telefone
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        (11) 3456-7890<br />
                        (11) 98765-4321 (WhatsApp)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="network-card">
              <div style={{ marginBottom: '24px' }}>
                <Send size={40} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Envie sua Mensagem
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Preencha o formulário e responderemos em breve!
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '2px solid var(--border-medium)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '2px solid var(--border-medium)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '2px solid var(--border-medium)',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '2px solid var(--border-medium)',
                      fontSize: '16px',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;