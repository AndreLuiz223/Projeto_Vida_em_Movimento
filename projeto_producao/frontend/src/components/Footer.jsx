import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--brand-dark)',
      color: 'white',
      padding: '48px 12px 24px',
      marginTop: '64px'
    }}>
      <div className="container" style={{
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Heart size={24} fill="#D3FF62" color="#D3FF62" />
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>Vida em Movimento</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: 0 }}>
              Promovendo a inclusão social e o bem-estar através do esporte, arte e educação.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Links Rápidos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/sobre" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Sobre Nós
              </Link>
              <Link to="/projetos" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Nossos Projetos
              </Link>
              <Link to="/voluntarios" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Seja Voluntário
              </Link>
              <Link to="/doacoes" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.2s' }}>
                Como Doar
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} />
                <span>contato@vidaemmovimento.org</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={18} />
                <span>(11) 3456-7890</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={18} />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Redes Sociais</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'white', transition: 'transform 0.2s' }}>
                <Facebook size={24} />
              </a>
              <a href="#" style={{ color: 'white', transition: 'transform 0.2s' }}>
                <Instagram size={24} />
              </a>
              <a href="#" style={{ color: 'white', transition: 'transform 0.2s' }}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '24px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '14px'
        }}>
          <p style={{ margin: 0 }}>
            © 2025 ONG Vida em Movimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;