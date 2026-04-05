function Services() {
  const services = [
    {
      icon: '🎉',
      title: 'EVENT DECORATION MANAGEMENT',
      description: 'लग्न, पार्टी आणि कॉर्पोरेट कार्यक्रमांसाठी आकर्षक आणि स्टायलिश सजावट सेवा.',
    },
    {
      icon: '🎨',
      title: 'GRAPHIC DESIGN',
      description: 'ब्रँडिंग, सोशल मीडिया पोस्ट्स आणि प्रिंट डिझाइनसाठी क्रिएटिव्ह डिझाइन.',
    },
    {
      icon: '💻',
      title: 'WEBSITE DEVELOPMENT',
      description: 'तुमचा व्यवसाय ऑनलाइन दाखवण्यासाठी responsive आणि modern वेबसाइट तयार करतो.',
    },
    {
      icon: '🎥',
      title: 'CINEMATIC VIDEO PRODUCTION',
      description: 'कार्यक्रम आणि प्रमोशनसाठी high-quality cinematic व्हिडिओ तयार करतो.',
    },
    {
      icon: '🥬',
      title: 'WHOLESALE VEGETABLE SUPPLY',
      description: 'दुकाने, विक्रेते आणि कॅटरिंग सेवांसाठी ताज्या आणि वेळेवर भाज्यांचा पुरवठा.',
    },
    {
      icon: '🚀',
      title: 'LOCAL MARKETING SUPPORT',
      description: 'Sangli मध्ये तुमचा व्यवसाय वाढवण्यासाठी प्रभावी local marketing सेवा.',
    },
  ];

  return (
    <section id="services" className="content-section">
      <div className="section-header">
        <div>
          <h2>Our Services</h2>
          <p>Complete solutions for Sangli residents, visitors, and businesses.</p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a className="card-cta" href="#contact">
              आता संपर्क साधा
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;