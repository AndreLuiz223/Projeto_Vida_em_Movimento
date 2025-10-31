import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

const Sobre = () => {
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
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            Sobre a ONG Vida em Movimento
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            Há 8 anos transformando vidas e construindo futuros mais promissores através do esporte, arte e educação.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
                Promover a inclusão social e o bem-estar de comunidades em situação de vulnerabilidade por meio de projetos de esporte, arte e educação, criando oportunidades de desenvolvimento pessoal e social.
              </p>
            </div>

            <div className="network-card">
              <div style={{ marginBottom: '16px' }}>
                <Eye size={48} color="var(--brand-primary)" />
              </div>
              <h3 className="network-card-title">Nossa Visão</h3>
              <p className="network-card-content">
                Ser referência nacional em transformação social através da prática esportiva e do aprendizado criativo, ampliando nosso impacto para mais comunidades em todo o Brasil.
              </p>
            </div>

            <div className="network-card">
              <div style={{ marginBottom: '16px' }}>
                <Award size={48} color="var(--brand-primary)" />
              </div>
              <h3 className="network-card-title">Nossos Valores</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Inclusão e respeito à diversidade</li>
                <li>Criatividade e inovação social</li>
                <li>Trabalho em equipe</li>
                <li>Compromisso com o desenvolvimento integral</li>
                <li>Transparência e ética</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '64px 12px', background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            Nossa História
          </h2>
          <div style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: '1.8',
            color: 'var(--text-secondary)'
          }}>
            <p style={{ marginBottom: '20px' }}>
              A ONG Vida em Movimento nasceu em 2017 do sonho de um grupo de educadores, atletas e artistas que acreditavam no poder transformador do esporte, da arte e da educação.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Começamos com um pequeno projeto de futebol em uma comunidade da zona sul de São Paulo, atendendo apenas 15 crianças. Hoje, já impactamos mais de 360 vidas diretamente, com 4 projetos ativos e uma rede de 45 voluntários dedicados.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Ao longo desses 8 anos, expandimos nossas atividades para incluir oficinas de arte, música, dança e programas de reforço escolar. Cada projeto é desenvolvido com carinho e profissionalismo, sempre com foco no desenvolvimento integral dos participantes.
            </p>
            <p>
              Nossa jornada é construída dia a dia, com a energia e dedicação de toda a equipe, voluntários, parceiros e, principalmente, com o sorriso de cada pessoa que passa pelos nossos projetos.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
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
            Nossos Objetivos Principais
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <TrendingUp size={56} color="var(--brand-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Desenvolvimento Pessoal
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Criar oportunidades de crescimento e desenvolvimento pessoal para jovens e adultos em situação de vulnerabilidade.
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
                Hábitos Saudáveis
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Estimular hábitos saudáveis, prática de atividades físicas e o exercício da cidadania plena.
              </p>
            </div>

            <div className="network-card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={56} color="var(--brand-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                Acesso à Cultura
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Ampliar o acesso à cultura, arte e educação comunitária de qualidade para todos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;