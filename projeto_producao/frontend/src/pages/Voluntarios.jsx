import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Voluntarios = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: 'Esporte',
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

    try {
      await axios.post(`${API}/volunteers`, formData);
      toast.success("Cadastro realizado com sucesso!", {
        description: "Entraremos em contato em breve. Obrigado por querer fazer parte!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        area: 'Esporte',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      toast.error("Erro ao enviar cadastro", {
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 12px',
        background: `linear-gradient(rgba(0, 69, 52, 0.85), rgba(0, 69, 52, 0.85)), url('https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'white',
            marginBottom: '24px'
          }}>
            Seja um Voluntário
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Sua dedicação pode transformar vidas. Junte-se a nós e faça a diferença na comunidade!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
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
            Por Que Ser Voluntário?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}>
            <div className="network-card" style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Impacto Real
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Veja de perto a transformação que seu trabalho gera na vida das pessoas.
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Novas Habilidades
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Desenvolva competências em liderança, comunicação e trabalho em equipe.
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
              Comunidade
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Faça parte de uma rede de pessoas engajadas em fazer o bem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '64px 12px', background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="network-card">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <UserPlus size={48} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                Cadastre-se Como Voluntário
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Preencha o formulário abaixo e entraremos em contato!
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
                  Nome Completo *
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
                    fontSize: '16px',
                    transition: 'border-color 0.2s'
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
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
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
                  Área de Interesse *
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '2px solid var(--border-medium)',
                    fontSize: '16px',
                    background: 'white'
                  }}
                >
                  <option value="Esporte">Esporte</option>
                  <option value="Arte">Arte & Cultura</option>
                  <option value="Educação">Educação</option>
                  <option value="Administração">Administração</option>
                  <option value="Comunicação">Comunicação</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  Mensagem (Opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos um pouco sobre você e por que deseja ser voluntário..."
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
                {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voluntarios;