import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="footer-widget-row">
            <div className="footer-widget">
              <h4 className="footer-widget-title">Sobre CAR.BLOG.BR</h4>
              <p className="footer-text">
                O CAR.BLOG.BR é o seu portal de notícias sobre o mundo automotivo, 
                com análises, lançamentos, comparativos e tudo sobre carros.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" className="footer-social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" className="footer-social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" className="footer-social-link"><i className="fab fa-instagram"></i></a>
                <a href="https://youtube.com" className="footer-social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-widget">
              <h4 className="footer-widget-title">Categorias</h4>
              <ul className="footer-links">
                <li><a href="/carros-mais-vendidos">Carros mais vendidos no Brasil</a></li>
                <li><a href="/lancamentos">Lançamentos</a></li>
                <li><a href="/carros-eletricos">Carros Elétricos</a></li>
                <li><a href="/testes">Testes</a></li>
                <li><a href="/comparativos">Comparativos</a></li>
                <li><a href="/mercado">Mercado</a></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="footer-widget-title">Marcas</h4>
              <ul className="footer-links">
                <li><a href="/marcas/volkswagen">Volkswagen</a></li>
                <li><a href="/marcas/toyota">Toyota</a></li>
                <li><a href="/marcas/honda">Honda</a></li>
                <li><a href="/marcas/chevrolet">Chevrolet</a></li>
                <li><a href="/marcas/hyundai">Hyundai</a></li>
                <li><a href="/marcas/byd">BYD</a></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="footer-widget-title">Institucional</h4>
              <ul className="footer-links">
                <li><a href="/contato">Contato</a></li>
                <li><a href="/privacidade">Política de Privacidade</a></li>
                <li><a href="/termos">Termos de Uso</a></li>
                <li><a href="/anuncie">Anuncie</a></li>
                <li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            &copy; 2025 CAR.BLOG.BR - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;