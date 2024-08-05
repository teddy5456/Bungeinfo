import React from 'react';
import './AboutParliament.css';
import Timeline from './Timeline';
import KenyanBicameralGovernment from './KenyanBicameralGovernment';

const timelineEvents = [
  {
    date: '1920s',
    title: 'Emergence of African Political Movements',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie_jvG2gXON9zARzLfCnT2CnT9z2CnT2CnT2CnT2CnT2CnT2CnT2Cn (replace with image of early Kenyan political leaders)',
    description: 'The early 1920s saw the rise of African political associations like the East African Association, advocating for African rights and representation in the colonial government.'
  },
  {
    date: '1944',
    title: 'First Africans Nominated to the LegCo (Legislative Council)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxOYJ18UbPwfixxQRD9XThjTYK3RVSbfouQ&s',
    description: 'In 1944, Eliud Mathu and Chief Mangata became the first Africans nominated to the Legislative Council, a milestone towards self-governance.'
  },
  {
    date: '1952-1960',
    title: 'Mau Mau Uprising and State of Emergency',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvb1sG_X29z4tZLbMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPh (replace with image of Mau Mau uprising)',
    description: 'The Mau Mau Uprising, a rebellion against British colonial rule, erupted in 1952. The British declared a State of Emergency, leading to a period of detention and conflict.'
  },
  {
    date: '1960-1963',
    title: 'Lancaster House Conferences and Independence Negotiations',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_pemvXON9zARzLfCnT2CnT2CnT2CnT2CnT2CnT2CnT2CnT2CnT2Cn (replace with image of Lancaster House)',
    description: 'A series of conferences were held at Lancaster House in London between 1960 and 1963 to negotiate the terms of Kenyan independence.'
  },
  {
    date: '1963',
    title: 'Independence and Establishment of the National Assembly',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfysQce2FJGmF__3ZPJdyv86TswEejpu94QQ&s',
    description: 'Kenya gained independence from British rule on December 12, 1963, with Jomo Kenyatta becoming the first Prime Minister and the National Assembly established as the legislative body.'
  },
  {
    date: '1964',
    title: 'Creation of the Senate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqLEbpuOdl1yXVah_dbALQCyUuBFweLv45A&s',
    description: 'A bicameral parliament was formed with the creation of the Senate alongside the National Assembly to represent regional interests.'
  },
  {
    date: '1966',
    title: 'Abolition of the Senate',
    description: 'Kenya transitioned to a unicameral parliament system with the abolishment of the Senate.'
  },
  {
    date: '2010',
    title: 'Reintroduction of the Senate',
    description: 'The Senate was reintroduced in 2010 following the new constitution.'
  }
];

function AboutParliament() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <>
  <div className='titl'>
  <h1 className="title">About</h1> 
  <h1 className='title2'>The Parliament <br></br> of Kenya</h1>
</div>
  <div className="about-parl">
  
  <div className='about'>
  <div className="about-parliament">

  
  <section className="section overview">
    <h2 className="section-title">Overview</h2>
    <div className='overview-inner'> 
      <p className="section-text">The Parliament of Kenya is a bicameral legislature, consisting of the National Assembly and the Senate. It is tasked with making laws, representing the people, and overseeing the executive branch of government. The Parliament plays a critical role in Kenya's democracy.</p>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIaKLmlM81MknIg9WbowCd95Jcy_Jp-uuoc5DhgNDN6i3Adm_gwz4C5JYJ8hfTcKUoWo&usqp=CAU' alt="Kenyan Parliament" />
    </div>
  </section>

  <section className="section history">
    <h2 className="section-title">History</h2>
    <p className="section-text">The history of the Parliament of Kenya dates back to the colonial period when the Legislative Council (LegCo) was established. Over the years, it has evolved significantly to become a key institution in Kenya's governance. Key historical milestones include the establishment of the National Assembly in 1963, the creation of the Senate in 1964, its abolition in 1966, and its reintroduction in 2010.</p>
    <div className="sub-section colonial">
      <h3 className="sub-section-title">Colonial Period</h3>
      <p className="sub-section-text">During the colonial period, the Legislative Council was the main legislative body. It was composed mainly of Europeans, with limited representation for Africans and Asians. The first Africans were nominated to the LegCo in 1944.</p>
    </div>
    <div className="sub-section post-independence">
      <h3 className="sub-section-title">Post-Independence</h3>
      <p className="sub-section-text">After gaining independence in 1963, Kenya established the National Assembly. The Senate was introduced in 1964 to represent regional interests but was abolished in 1966. The Senate was reintroduced in 2010 following the promulgation of the new constitution.</p>
    </div>
  </section>

  <section className="section structure">
    <h2 className="section-title">Structure</h2>
    <div className="sub-section bicameral-system">
      <h3 className="sub-section-title">Bicameral System</h3>
      <p className="sub-section-text">The Parliament of Kenya is divided into two houses:</p>
      <ul className="sub-section-list">
        <li className="list-item"><strong>National Assembly:</strong> This house represents the people of Kenya and is responsible for making and passing laws. It has 290 elected members, 47 women representatives, and 12 nominated members.</li>
        <li className="list-item"><strong>Senate:</strong> This house represents the counties and protects their interests. It consists of 47 elected Senators representing the counties, 16 women nominated by political parties, 2 members representing youth, and 2 representing persons with disabilities.</li>
      </ul>
      <KenyanBicameralGovernment />
    </div>
  </section>

  <section className="section functions">
    <h2 className="section-title">Functions and Roles</h2>
    <p className="section-text">The primary functions of the Parliament of Kenya include:</p>
    <ul className="sub-section-list modern-list">
      <li className="list-item modern-list-item">
        <span className="number">1</span>
        <div className="list-content one">
          <strong>Legislation:</strong><br/> 
          Making and passing laws. The Parliament debates proposed laws and either approves, amends, or rejects them. Legislation is crucial for the governance of the country and affects all aspects of society.
        </div>
      </li>
      <li className="list-item modern-list-item">
        <span className="number">2</span>
        <div className="list-content">
          <strong>Representation:</strong><br/> 
          Representing the interests and will of the people. Members of Parliament (MPs) represent their constituents' views and concerns, ensuring that the diverse voices of the Kenyan population are heard in the legislative process.
        </div>
      </li>
      <li className="list-item modern-list-item">
        <span className="number">3</span>
        <div className="list-content">
          <strong>Oversight:</strong><br/> 
          Monitoring and supervising the executive branch and other government agencies. This function helps to hold the government accountable and ensures that public resources are used effectively and ethically.
        </div>
      </li>
      <li className="list-item modern-list-item">
        <span className="number">4</span>
        <div className="list-content">
          <strong>Budget Approval:</strong><br/> 
          Approving government expenditure and revenue collection. The Parliament reviews, modifies, and approves the national budget, which outlines the government's spending priorities and financial plans for the fiscal year.
        </div>
      </li>
      <li className="list-item modern-list-item">
        <span className="number">5</span>
        <div className="list-content">
          <strong>Constituency Service:</strong><br/>
          Assisting constituents with issues and concerns related to government services. MPs often help resolve local problems and advocate for the needs and interests of their constituents.
        </div>
      </li>
      <li className="list-item modern-list-item">
        <span className="number">6</span>
        <div className="list-content">
          <strong>International Relations:</strong><br/>
          Participating in international diplomacy and inter-parliamentary activities. The Parliament of Kenya engages with other nations' legislatures and international organizations to promote cooperation and represent Kenya's interests abroad.
        </div>
      </li>
    </ul>
  </section>

  <section className="section committees">
    <h2 className="section-title">Parliamentary Committees</h2>
    <p className="section-text">Parliamentary committees are essential in managing the workload of Parliament and ensuring detailed scrutiny of legislation and government actions. There are several types of committees, including:</p>
    <ul className="sub-section-list">
      <li className="list-item"><strong>Standing Committees:</strong> Permanent committees established by the Standing Orders of Parliament. Examples include the Public Accounts Committee and the Budget and Appropriations Committee.</li>
      <li className="list-item"><strong>Select Committees:</strong> Established for a specific purpose and for a limited time. They dissolve once their task is complete.</li>
      <li className="list-item"><strong>Joint Committees:</strong> Consist of members from both the National Assembly and the Senate to address issues requiring joint consideration.</li>
    </ul>
  </section>

  <section className="section membership">
    <h2 className="section-title">Membership and Elections</h2>
    <p className="section-text">Members of the National Assembly and the Senate are elected during general elections held every five years. The National Assembly members are elected through a first-past-the-post system, while Senators are elected to represent counties. There are also nominated members representing special interests such as women, youth, and persons with disabilities.</p>
  </section>

  <section className="section leadership">
    <h2 className="section-title">Leadership</h2>
    <p className="section-text">The Parliament of Kenya is led by the Speaker, who is elected by members of each house. The Speaker presides over parliamentary sessions, ensures orderly conduct of business, and represents the Parliament in official functions. Each house also has a Deputy Speaker to assist in these duties.</p>
  </section>
  
 
  
  <h2 className="section-title">Interactive Timeline</h2>
  <div className="timeline">
    <Timeline events={timelineEvents} />
  </div>
</div>
  </div>
  <div className='side-col'>
  {/* News and Events Section */}
  <section className="news-events">
    <h2 className="section-titl">News and Events</h2>
    <p className="section-text">Stay updated with the latest news and events related to the Parliament of Kenya.</p>
    
    {/* Placeholder events */}
    <div className="event-list">
      <div className="event">
        <h3 className="event-title">Upcoming Event Title</h3>
        <p className="event-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla eget magna dignissim.</p>
        <div className="event-details">
          <span className="event-date">Date: July 15, 2024</span>
          <span className="event-location">Location: Nairobi, Kenya</span>
        </div>
      </div>
      <div className="event">
        <h3 className="event-title">Another Event Title</h3>
        <p className="event-text">Nulla facilisi. Phasellus consequat libero eget posuere. Aenean a libero sed magna pharetra tincidunt.</p>
        <div className="event-details">
          <span className="event-date">Date: August 5, 2024</span>
          <span className="event-location">Location: Mombasa, Kenya</span>
        </div>
      </div>
      {/* Add more placeholder events as needed */}
    </div>
  </section>
  
  <section className="posts news-events">
    <h2 className="section-titl">Posts</h2>
    <div className="post-list">
      <div className="post">
        <p className="post-text">Example post or tweet content goes here...</p>
        <a href="https://twitter.com/KenyaParliament" className="follow-button" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
      </div>
      <div className="post">
        <p className="post-text">Another example post or tweet content goes here...</p>
        <a href="https://twitter.com/KenyaParliament" className="follow-button" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
      </div>
    </div>
  </section>
</div>
</div>

  </>  
  );
}

export default AboutParliament;
