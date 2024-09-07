import React from 'react';
import '../styles/footer.css';  // Importando o CSS para o Footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      <p>
        <a href="/contact">Contato</a> | <a href="/privacy">Política de Privacidade</a>
      </p>
    </footer>
  );
}

export default Footer;
