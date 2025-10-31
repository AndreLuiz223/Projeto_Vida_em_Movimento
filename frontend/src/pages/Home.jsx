import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Heart, Users, BookOpen, Dumbbell } from 'lucide-react';
import { mockStats } from '../mock';

const Home = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 12px',
        background: `linear-gradient(rgba(0, 69, 52, 0.85), rgba(0, 69, 52, 0.85)), url('https://images.pexels.com/photos/34431804/pexels-photo-34431804.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 0 48px 48px'
      }}>
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 6.5vw, 5rem)',
              fontWeight: '700',
              lineHeight: '0.95',
              color: 'white',
              marginBottom: '24px'
            }}>
              Transformando Vidas Através do Movimento
            </h1>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px'
            }}>
              Promovemos a inclusão social e o bem-estar de comunidades em situação de vulnerabilidade por meio de projetos de esporte, arte e educação.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/voluntarios" className="btn-primary">
                Seja Voluntário
              </Link>
              <Link to="/projetos" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                Conheça Nossos Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '64px 12px', background: 'var(--bg-page)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--brand-primary)',
                marginBottom: '8px'
              }}>
                {mockStats.volunteers}+
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                fontWeight: '600'
              }}>
                Voluntários
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--brand-primary)',
                marginBottom: '8px'
              }}>
                {mockStats.beneficiaries}+
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                fontWeight: '600'
              }}>
                Beneficiados
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--brand-primary)',
                marginBottom: '8px'
              }}>
                {mockStats.projects}
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                fontWeight: '600'
              }}>
                Projetos Ativos
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--brand-primary)',
                marginBottom: '8px'
              }}>
                {mockStats.years}
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                fontWeight: '600'
              }}>
                Anos de Impacto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '64px 12px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <div className="network-card">
              <div style={{ marginBottom: '16px' }}>
                <Target size={48} color="var(--brand-primary)" />
              </div>
              <h3 className="network-card-title">Nossa Missão</h3>
              <p className="network-card-content">
                Promover a inclusão social e o bem-estar de comunidades em situação de vulnerabilidade por meio de projetos de esporte, arte e educação.
              </p>
            </div>

            <div className="network-card">
              <div style={{ marginBottom: '16px' }}>
                <Eye size={48} color="var(--brand-primary)" />
              </div>
              <h3 className="network-card-title">Nossa Visão</h3>
              <p className="network-card-content">
                Ser referência nacional em transformação social através da prática esportiva e do aprendizado criativo.
              </p>
            </div>

            <div className="network-card">
              <div style={{ marginBottom: '16px' }}>
                <Award size={48} color="var(--brand-primary)" />
              </div>
              <h3 className="network-card-title">Nossos Valores</h3>
              <p className="network-card-content">
                Inclusão, respeito, criatividade, trabalho em equipe e compromisso com o desenvolvimento humano integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section style={{ padding: '64px 12px', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Áreas de Atuação
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Dumbbell size={56} color="var(--brand-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Esporte
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Aulas de futebol, basquete e atividades físicas que promovem saúde, disciplina e trabalho em equipe.
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Heart size={56} color="var(--brand-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Arte & Cultura
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Oficinas de arte, música e dança que estimulam a criatividade e a expressão cultural da comunidade.
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <BookOpen size={56} color="var(--brand-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Educação
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Reforço escolar e alfabetização para jovens e adultos, ampliando o acesso à educação de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '64px 12px',
        background: 'var(--brand-dark)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Users size={64} color="var(--brand-primary)" style={{ marginBottom: '24px' }} />
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '24px'
          }}>
            Faça Parte Dessa Transformação
          </h2>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px'
          }}>
            Junte-se a nós como voluntário ou contribua com uma doação. Cada ação faz a diferença na vida de centenas de pessoas.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/voluntarios" className="btn-primary">
              Quero Ser Voluntário
            </Link>
            <Link to="/doacoes" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              Fazer uma Doação
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;