function Portfolio() {
  const portfolioItems = [
    {
      category: 'Event Decoration',
     
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgYE_mZemBas4ZlUv2-30otxOd29UfRYa0g&s',
    },
    {
      category: 'Website Development',
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWdUPX9TEMCbB2LiIjBUsJ_U9RyHvNYso_Q&s',
    },
    {
      category: 'Video Work',

      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUwHWG2f3EVrXUfNqZzvmLC1x8OE9GgM5Qg&s',
    },
    {
      category: 'local marketing support',
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvMCsVRnc_oEbphhbbaxktEZcWtUqrUOykg&s',
    },
    {
      category: 'Graphic Design',
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYGxLHOOmoP-CSyEzoof1m4AZ0m0hTia6rw&s',
    },
    {
      category: 'Wholesale Vegetable Supply',
      
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJkrCHNOES8HdIAEDzvt-IeBBKVsNbq6GdQ&s',
    },
  ];

  return (
    <section id="portfolio" className="content-section">
      <div className="section-header">
        <div>
          <h2>Our Work</h2>
          <p>Event Decoration, Graphic Design आणि Video Work से परियोजना एक्सप्लोर करा</p>
        </div>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article key={item.category} className="portfolio-card">
            <div className="portfolio-image-wrapper">
              <img src={item.image} alt={item.category} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3>{item.category}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
