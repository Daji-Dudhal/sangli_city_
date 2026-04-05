import { useState } from 'react';

function Home() {
  const [followStatus, setFollowStatus] = useState(false);

  const profileStats = {
    posts: 296,
    followers: 1950,
    following: 2065
  };

  const highlights = [
    { id: 1, title: 'Events', icon: '🎉' },
    { id: 2, title: 'Design', icon: '🎨' },
    { id: 3, title: 'Websites', icon: '💻' },
    { id: 4, title: 'Videos', icon: '🎥' }
  ];

  return (
    <section id="home" className="instagram-profile-simple">
      {/* Profile Header */}
      <div className="profile-header-section">
        <div className="profile-cover">
          <div className="cover-gradient"></div>
        </div>

        <div className="profile-info-main">
          <div className="profile-header-content">
            <div className="profile-pic-large">
              <img src="/sanglicitylogo.jpeg" alt="Sangli City" />
            </div>

            <div className="profile-details">
              <div className="name-row">
                <h1>Sangli City</h1>
                <button className="verify-badge">✓</button>
              </div>
              <p className="username">@sangli_city_</p>
              <p className="bio">
                Modern Design | Event Decor | Graphic Design | Web Solutions<br/>
                सांगली का विकास | Local Business Growth Partner 🚀
              </p>

              <div className="profile-links">
                <a 
                  href="https://www.instagram.com/sangli_city_/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="link-btn"
                >
                  Instagram
                </a>
                <a href="#contact" className="link-btn">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-number">{profileStats.posts}</div>
              <div className="stat-label">Posts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{profileStats.followers.toLocaleString()}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{profileStats.following}</div>
              <div className="stat-label">Following</div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/sangli_city_/"
            target="_blank"
            rel="noreferrer"
            className={`follow-btn ${followStatus ? 'following' : ''}`}
            onClick={() => setFollowStatus(!followStatus)}
          >
            {followStatus ? '✓ Following' : '+ Follow'}
          </a>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <div className="highlights-wrapper">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight">
              <div className="highlight-circle">
                <span>{highlight.icon}</span>
              </div>
              <p>{highlight.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Home;
