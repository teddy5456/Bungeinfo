import React, { useState } from 'react';
import './Speakers.css';

const speakers = [
  {
    id: 1,
    name: 'Jomo Kenyatta',
    photo: 'https://media.gettyimages.com/id/3426968/photo/jomo-kenyatta-president-of-the-new-republic-of-kenya.jpg?s=612x612&w=0&k=20&c=05u0EJz2dLfSlL4nOvNBVc_57djx-hfbzHpmmBO8LoQ=',
    summary: 'Jomo Kenyatta served as Speaker of the National Assembly from 1963 to 1964.',
    biography: 'Jomo Kenyatta was a Kenyan anti-colonial activist and politician who served as the first Prime Minister of Kenya and later as its first President...',
    achievements: ['Led Kenya to independence', 'Established the foundation of the new nation'],
    timeline: '1963-1964',
    region: 'Gatundu South',
    videoUrl: 'https://www.youtube.com/embed/video1',
    quotes: ['"Our children may learn about the heroes of the past. Our task is to make ourselves the architects of the future."'],
    relatedArticles: [
      { title: 'The Legacy of Jomo Kenyatta', url: 'https://example.com/article1' },
      { title: 'Jomo Kenyatta’s Role in Kenya’s Independence', url: 'https://example.com/article2' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/kenyatta' },
      { platform: 'Facebook', url: 'https://facebook.com/kenyatta' }
    ],
    gallery: [
      '/images/kenyatta1.jpg',
      '/images/kenyatta2.jpg'
    ],
  },
  {
    id: 2,
    name: 'Humphrey Slade',
    photo: 'https://img.mauritius-images.com/dsf/preview_watermarked/ME-PI-9316543/save_as_name/mauritius%20images%20-%2012064249%20-%20Humphrey%20Slade%20Kenya%20Delegate%2013%20February%201960.jpg',
    summary: 'Humphrey Slade served as Speaker of the National Assembly from 1964 to 1979.',
    biography: 'Humphrey Slade was a British-born Kenyan lawyer and politician who served as the Speaker of the National Assembly from 1964 to 1979...',
    achievements: ['Reformed parliamentary procedures', 'Promoted legal frameworks for independence'],
    timeline: '1964-1979',
    region: 'Nairobi West',
    videoUrl: 'https://www.youtube.com/embed/video2',
    quotes: ['"The law is the foundation of a just society."'],
    relatedArticles: [
      { title: 'Humphrey Slade’s Legal Reforms', url: 'https://example.com/article3' },
      { title: 'The Impact of Slade’s Tenure', url: 'https://example.com/article4' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/slade' },
      { platform: 'Facebook', url: 'https://facebook.com/slade' }
    ],
    gallery: [
      '/images/slade1.jpg',
      '/images/slade2.jpg'
    ],
  },
  {
    id: 3,
    name: 'Fredrick Mati',
    photo: '/images/fredrick-mati.jpg',
    summary: 'Fredrick Mati served as Speaker of the National Assembly from 1979 to 1988.',
    biography: 'Fredrick Mati was a Kenyan lawyer and politician who served as the Speaker of the National Assembly from 1979 to 1988...',
    achievements: ['Strengthened parliamentary committees', 'Enhanced legislative transparency'],
    timeline: '1979-1988',
    region: 'Kiambu',
    videoUrl: 'https://www.youtube.com/embed/video3',
    quotes: ['"Transparency is the cornerstone of democracy."'],
    relatedArticles: [
      { title: 'Fredrick Mati’s Contributions', url: 'https://example.com/article5' },
      { title: 'Mati’s Influence on Modern Legislation', url: 'https://example.com/article6' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/mati' },
      { platform: 'Facebook', url: 'https://facebook.com/mati' }
    ],
    gallery: [
      '/images/mati1.jpg',
      '/images/mati2.jpg'
    ],
  },
  {
    id: 4,
    name: 'Francis Ole Kaparo',
    photo: '/images/francis-ole-kaparo.jpg',
    summary: 'Francis Ole Kaparo served as Speaker of the National Assembly from 1993 to 2001.',
    biography: 'Francis Ole Kaparo is a Kenyan politician who served as the Speaker of the National Assembly from 1993 to 2001...',
    achievements: ['Modernized parliamentary operations', 'Advocated for rural development'],
    timeline: '1993-2001',
    region: 'Laikipia North',
    videoUrl: 'https://www.youtube.com/embed/video4',
    quotes: ['"Development must reach every corner of our nation."'],
    relatedArticles: [
      { title: 'Kaparo’s Parliamentary Modernization', url: 'https://example.com/article7' },
      { title: 'Ole Kaparo’s Rural Initiatives', url: 'https://example.com/article8' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/kaparo' },
      { platform: 'Facebook', url: 'https://facebook.com/kaparo' }
    ],
    gallery: [
      '/images/kaparo1.jpg',
      '/images/kaparo2.jpg'
    ],
  },
  {
    id: 5,
    name: 'Francis K. Nyenze',
    photo: '/images/francis-k-nyenze.jpg',
    summary: 'Francis K. Nyenze served as Speaker of the National Assembly from 2003 to 2008.',
    biography: 'Francis K. Nyenze was a Kenyan politician who served as the Speaker of the National Assembly from 2003 to 2008...',
    achievements: ['Improved legislative oversight', 'Promoted public accountability'],
    timeline: '2003-2008',
    region: 'Kitui West',
    videoUrl: 'https://www.youtube.com/embed/video5',
    quotes: ['"Accountability is the lifeblood of democracy."'],
    relatedArticles: [
      { title: 'Nyenze’s Leadership in Parliament', url: 'https://example.com/article9' },
      { title: 'The Accountability Era of Nyenze', url: 'https://example.com/article10' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/nyenze' },
      { platform: 'Facebook', url: 'https://facebook.com/nyenze' }
    ],
    gallery: [
      '/images/nyenze1.jpg',
      '/images/nyenze2.jpg'
    ],
  },
  {
    id: 6,
    name: 'Kenneth Marende',
    photo: '/images/kenneth-marende.jpg',
    summary: 'Kenneth Marende served as Speaker of the National Assembly from 2008 to 2013.',
    biography: 'Kenneth Marende is a Kenyan lawyer and politician who served as the Speaker of the National Assembly from 2008 to 2013...',
    achievements: ['Promoted bipartisan cooperation', 'Strengthened legislative independence'],
    timeline: '2008-2013',
    region: 'Emuhaya',
    videoUrl: 'https://www.youtube.com/embed/video6',
    quotes: ['"Unity in diversity strengthens our nation."'],
    relatedArticles: [
      { title: 'Marende’s Era of Cooperation', url: 'https://example.com/article11' },
      { title: 'Legislative Independence under Marende', url: 'https://example.com/article12' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/marende' },
      { platform: 'Facebook', url: 'https://facebook.com/marende' }
    ],
    gallery: [
      '/images/marende1.jpg',
      '/images/marende2.jpg'
    ],
  },
  {
    id: 7,
    name: 'Justin Muturi',
    photo: '/images/justin-muturi.jpg',
    summary: 'Justin Muturi has served as Speaker of the National Assembly since 2013.',
    biography: 'Justin Bedan Njoka Muturi is a Kenyan lawyer and politician who has served as the Speaker of the National Assembly since 2013...',
    achievements: ['Implemented digital transformation', 'Enhanced legislative transparency'],
    timeline: '2013-present',
    region: 'Mbeere North',
    videoUrl: 'https://www.youtube.com/embed/video7',
    quotes: ['"Transparency and technology are the future of governance."'],
    relatedArticles: [
      { title: 'Muturi’s Digital Parliament', url: 'https://example.com/article13' },
      { title: 'Transparency Reforms by Muturi', url: 'https://example.com/article14' }
    ],
    socialMedia: [
      { platform: 'Twitter', url: 'https://twitter.com/muturi' },
      { platform: 'Facebook', url: 'https://facebook.com/muturi' }
    ],
    gallery: [
      '/images/muturi1.jpg',
      '/images/muturi2.jpg'
    ],
  },
];

const Speakers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [detailsVisible, setDetailsVisible] = useState({});
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredSpeakers(
      speakers.filter((speaker) =>
        speaker.name.toLowerCase().includes(term)
      )
    );
  };

  const toggleDetails = (id) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>Speakers of the National Assembly of Kenya</h1>
        <p>Explore the history and contributions of the Speakers of the National Assembly of Kenya.</p>
      </header>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Search speakers..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </section>

      <section className="filter">
        <h2>Filter by:</h2>
        <div className="filter-options">
          <button>1960s</button>
          <button>1970s</button>
          <button>1980s</button>
          <button>1990s</button>
          <button>2000s</button>
          <button>2010s</button>
        </div>
      </section>

      <section className="speaker-list">
      {filteredSpeakers.map((speaker) => (
        <div key={speaker.id} className="speaker-card">
          <img src={speaker.photo} alt={speaker.name} />
          <h2>{speaker.name}</h2>
          <p>{speaker.summary}</p>
          <button className="details-toggle" onClick={() => toggleDetails(speaker.id)}>View Details</button>
          <div className={`details ${detailsVisible[speaker.id] ? 'visible' : ''}`}>
            <h3>Achievements</h3>
            <ul>
              {speaker.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <h3>Timeline</h3>
            <p>{speaker.timeline}</p>
            <h3>Region</h3>
            <p>{speaker.region}</p>
            <h3>Video</h3>
            <iframe
              width="560"
              height="315"
              src={speaker.videoUrl}
              title="Speaker video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Quotes</h3>
            <blockquote>{speaker.quotes[0]}</blockquote>
            <h3>Related Articles</h3>
            <ul>
              {speaker.relatedArticles.map((article, index) => (
                <li key={index}><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></li>
              ))}
            </ul>
            <h3>Social Media</h3>
            <ul>
              {speaker.socialMedia.map((social, index) => (
                <li key={index}><a href={social.url} target="_blank" rel="noopener noreferrer">{social.platform}</a></li>
              ))}
            </ul>
            <h3>Photo Gallery</h3>
            <div className="gallery">
              {speaker.gallery.map((photo, index) => (
                <img key={index} src={photo} alt={`${speaker.name} ${index}`} />
              ))}
            </div>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      ))}
    </section>
    

      <footer>
        <p>&copy; 2024 Parliament of Kenya</p>
      </footer>
    </div>
  );
};

export default Speakers;