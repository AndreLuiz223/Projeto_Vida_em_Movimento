import React from 'react';
import { DollarSign, CreditCard, Building2, QrCode, Heart } from 'lucide-react';

const Doacoes = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 12px',
        background: 'var(--bg-subtle)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Heart size={64} color="var(--brand-primary)" style={{ marginBottom: '24px' }} />
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            Faça uma Doação
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            Sua contribuição ajuda a transformar vidas e ampliar nosso impacto na comunidade.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ padding: '64px 12px' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Como Sua Doação Ajuda
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}>
            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--brand-dark)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                R$ 50
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Material Esportivo
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Fornece material esportivo para uma criança por 1 mês
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--brand-dark)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                R$ 100
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Material Didático
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Garante material didático para 5 alunos no reforço escolar
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--brand-dark)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                R$ 200
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Oficina de Arte
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Mantém uma oficina de arte funcionando por 1 mês
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section style={{ padding: '64px 12px', background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Formas de Doar
          </h2>

          <div style={{
            display: 'grid',
            gap: '32px'
          }}>
            {/* PIX */}
            <div className="network-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  padding: '12px',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <QrCode size={32} color="var(--brand-dark)" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    PIX
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '12px'
                  }}>
                    Faça sua doação de forma rápida e segura via PIX:
                  </p>
                  <div style={{
                    background: 'var(--bg-page)',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--brand-dark)',
                    wordBreak: 'break-all'
                  }}>
                    doacoes@vidaemmovimento.org
                  </div>
                </div>
              </div>
            </div>

            {/* Transferência Bancária */}
            <div className="network-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  padding: '12px',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <Building2 size={32} color="var(--brand-dark)" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    Transferência Bancária
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '12px'
                  }}>
                    Realize transferências para nossa conta:
                  </p>
                  <div style={{
                    background: 'var(--bg-page)',
                    padding: '16px',
                    borderRadius: '12px'
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--brand-dark)' }}>Banco:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>Banco do Brasil</span>
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--brand-dark)' }}>Agência:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>1234-5</span>
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--brand-dark)' }}>Conta Corrente:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>12345-6</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--brand-dark)' }}>CNPJ:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>12.345.678/0001-90</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Depósito */}
            <div className="network-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  padding: '12px',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <DollarSign size={32} color="var(--brand-dark)" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    Depósito em Dinheiro
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '12px'
                  }}>
                    Faça depósitos em dinheiro em qualquer agência do Banco do Brasil usando os dados acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '32px',
            background: 'white',
            borderRadius: '24px',
            border: '2px solid var(--border-light)'
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Após realizar sua doação, entre em contato conosco para receber seu comprovante e acompanhar o impacto da sua contribuição.
            </p>
            <p style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--brand-dark)'
            }}>
              Email: contato@vidaemmovimento.org | Tel: (11) 3456-7890
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section style={{
        padding: '64px 12px',
        background: 'var(--brand-dark)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Heart size={64} color="var(--brand-primary)" style={{ marginBottom: '24px' }} />
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '24px'
          }}>
            Muito Obrigado!
          </h2>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Cada doação, independente do valor, faz uma enorme diferença em nossas atividades e na vida de quem atendemos. Gratidão!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Doacoes;