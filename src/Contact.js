import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      setStatus('कृपया सर्व माहिती भरा.');
      return;
    }

    const recipientEmail = 'ddudhal17@gmail.com';
    const subject = encodeURIComponent('New message from Sangli website contact form');
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`);

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    setStatus('धन्यवाद! आपला संदेश आमला मिळाला आहे. आम्ही लवकरच आपणास संपर्क साधा करू.');
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-header">
        <div>
          <h2>Contact Us</h2>
          <p>Sangli City Official collaborations आणि Local Support साठी आमसे संपर्क साधा</p>
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            नाव
            <input
              type="text"
              name="name"
              placeholder="तुमचे नाव"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            फोन
            <input
              type="tel"
              name="phone"
              placeholder="तुमचा फोन नंबर"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            संदेश
            <textarea
              name="message"
              rows="5"
              placeholder="मी तुम्हाला कशी मदत करू शकतो?"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="form-submit">
            सबमिट करा
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <aside className="contact-info">
          <p>जलद समर्थन पसंत आहे? WhatsApp वर संदेश पाठवा किंवा इंस्टाग्राम पेज फॉलो करा.</p>
          <div className="contact-details">
            <p><strong>मोबाईल:</strong> 7498130171</p>
            <p><strong>ईमेल:</strong> ddudhal17@gmail.com</p>
          </div>
          <div className="contact-actions">
            <a
              className="whatsapp-btn"
              href="https://wa.me/7498130171"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="instagram-link"
              href="https://instagram.com/sangli_city_"
              target="_blank"
              rel="noreferrer"
            >
              @sangli_city_
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
