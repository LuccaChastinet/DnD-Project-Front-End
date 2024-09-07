import React from 'react'
import '../styles/header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
      <header className="header">
        <h1 className="logo">Meu Site</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/home" className="nav-link">Início</Link></li>
            <li><Link to="/magias" className="nav-link">Magias</Link></li>
            <li><Link to="/ferramentas" className="nav-link">Ferramentas</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;