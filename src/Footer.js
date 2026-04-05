function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Sangli City Official</h3>
          <p>All services, one local platform.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://instagram.com/sangli_city_" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sangli City Official. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
