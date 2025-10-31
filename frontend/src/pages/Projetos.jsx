import React, { useState, useEffect } from 'react';
import { Users, Calendar } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projetos = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/projects`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
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
            Nossos Projetos
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            Conheça as iniciativas que estão transformando vidas e construindo um futuro melhor para nossa comunidade.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '64px 12px' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '48px' }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                Carregando projetos...
              </p>
            </div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px' }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                Nenhum projeto disponível no momento.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}>
              {projects.map((project) => (
              <div key={project.id} className="network-card" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{
                  height: '240px',
                  background: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                
                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--brand-primary)',
                    color: 'var(--brand-dark)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}>
                    {project.category}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Users size={18} color="var(--brand-dark)" />
                      <span style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '500' }}>
                        {project.participants} participantes
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={18} color="var(--brand-dark)" />
                      <span style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '500' }}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '64px 12px',
        background: 'var(--bg-subtle)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            Quer Participar dos Nossos Projetos?
          </h2>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '32px'
          }}>
            Seja como participante, voluntário ou parceiro, você pode fazer parte dessa transformação!
          </p>
          <a href="/contato" className="btn-primary">
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projetos;