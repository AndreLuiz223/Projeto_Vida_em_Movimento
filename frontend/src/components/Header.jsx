import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <Heart size={24} fill="#D3FF62" color="#D3FF62" />
          Vida em Movimento
        </Link>
        
        <nav className="network-nav">
          <Link to="/" className={`network-nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/sobre" className={`network-nav-link ${isActive('/sobre') ? 'active' : ''}`}>
            Sobre Nós
          </Link>
          <Link to="/projetos" className={`network-nav-link ${isActive('/projetos') ? 'active' : ''}`}>
            Projetos
          </Link>
          <Link to="/voluntarios" className={`network-nav-link ${isActive('/voluntarios') ? 'active' : ''}`}>
            Voluntários
          </Link>
          <Link to="/doacoes" className={`network-nav-link ${isActive('/doacoes') ? 'active' : ''}`}>
            Doações
          </Link>
          <Link to="/contato" className={`network-nav-link ${isActive('/contato') ? 'active' : ''}`}>
            Contato
          </Link>
        </nav>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav open">
          <Link to="/" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/sobre" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Sobre Nós
          </Link>
          <Link to="/projetos" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Projetos
          </Link>
          <Link to="/voluntarios" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Voluntários
          </Link>
          <Link to="/doacoes" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Doações
          </Link>
          <Link to="/contato" className="network-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;