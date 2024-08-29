import React, {useState} from 'react';
import './AboutParliament.css';
import Timeline from './Timeline';
import { FaRegLightbulb, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import KenyanBicameralGovernment from './KenyanBicameralGovernment';

const timelineEvents = [
  {
    date: '1920s',
    title: 'Emergence of African Political Movements',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie_jvG2gXON9zARzLfCnT2CnT9z2CnT2CnT2CnT2CnT2CnT2CnT2Cn',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvb1sG_X29z4tZLbMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPhVvnVMEPh',
    description: 'The Mau Mau Uprising, a rebellion against British colonial rule, erupted in 1952. The British declared a State of Emergency, leading to a period of detention and conflict.'
  },
  {
    date: '1960-1963',
    title: 'Lancaster House Conferences and Independence Negotiations',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_pemvXON9zARzLfCnT2CnT2CnT2CnT2CnT2CnT2CnT2CnT2CnT2Cn',
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
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <div className="about-parl">

      <nav className="side-nav">
      <br/>
          <ul className='ul1'>
          <li>
              <a href="#overview">Overview</a>
              <button onClick={toggleDropdown} className="dropdown-toggle">
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#engagement">Engagement</a></li>
                </ul>
              )}
            </li>
            <li><a href="#structure">Structure</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#committees">Committees</a></li>
          </ul>
          <div className="parliament-facts">
                    <h6 className="facts-title">
  <FaRegLightbulb style={{ marginRight: '8px', color: 'gold', fontSize: '1.5rem' }} />
  Did You Know?
</h6>

                    <ul className="facts-list">
                      <li className="facts-item">The Parliament of Kenya meets in the New Parliament Building which was completed in 1988.</li>
                      <li className="facts-item">The bicameral system was reintroduced in 2010 with the promulgation of Kenya’s new constitution, which aimed to enhance regional representation and check the powers of the executive.</li>
                      <li className="facts-item">Parliament has a dedicated website where citizens can access legislative documents, track bills, and follow parliamentary debates in real-time.</li>
                      <li className="facts-item">In addition to its legislative role, Parliament conducts inquiries and investigations into various issues affecting the nation, such as corruption and misuse of public funds.</li>
                    </ul>
            </div>
        </nav>

        <div className="about">
          <div className="about-parliament">
              {/* Overview Section */}
              <section id='overview' className="section overview">
                <h2 className="section-title">Overview of the Parliament of Kenya</h2>
                <div className="overview-inner">
                  <div className="overview-text">
                    <p className="section-text">
                      The Parliament of Kenya, established under the 2010 Constitution, is a bicameral legislature comprising the National Assembly and the Senate. This dual-chamber system was designed to ensure comprehensive representation and effective governance.
                    </p>

                    <p className="section-text">
                      The Parliament’s primary functions include legislation, representation, oversight of the executive branch, and approving the national budget. It also serves as a forum for public engagement, allowing citizens to participate in the democratic process through various mechanisms such as petitions and public hearings.
                    </p>
                    <p className="section-text">
                      Historically, the Parliament of Kenya has undergone several changes, from its origins as a colonial legislative body to its current form as a key institution in Kenya’s democratic framework. The evolution reflects the country’s journey towards self-governance and inclusive democracy.
                    </p>
                  </div>
                  <div className="overview-image">
                    <img src={require('../assets/parliament-transformed.jpeg')} alt="Kenyan Parliament" />
                    <div className="image-caption">The Parliament of Kenya in session.</div>
                  </div>
                  <div className="overview-additional">

                    <div className="public-engagement">
                        <h3 className="engagement-title">Public Engagement: A Cornerstone of Kenyan Democracy</h3>
                        <p className="engagement-text">
                          The Parliament of Kenya is dedicated to nurturing a dynamic and inclusive democratic process. To this end, it fosters active public participation through various channels, including
                            <ol>
                              <li><strong>Public petitions</strong></li>
                              <li><strong>Consultations</strong></li> 
                              <li><strong>Community outreach programs</strong>.</li>
                            </ol> 

                          <strong>Public Petitions:</strong> This is your opportunity to make your voice heard! Through public petitions, citizens can formally present their concerns and suggestions to the Parliament, influencing policy decisions directly. Interested in making an impact? Learn more about submitting a public petition by visiting the <a href="http://www.parliament.go.ke/contact/national_assembly_petition" target="_blank" rel="noopener noreferrer">National Assembly Petition</a> page.

                          <br/><strong>Consultations:</strong> The Parliament regularly holds consultations to gather diverse inputs on legislative matters. These sessions involve civil society organizations, experts, and the public, ensuring that the legislative process benefits from a wide range of perspectives. Keep abreast of upcoming consultations by visiting the Parliament's website or subscribing to their newsletter.

                          <br/><strong>Community Outreach Programs:</strong> Engaging with communities is key to the Parliament’s mission. Outreach programs aim to educate citizens about their rights and the legislative process while promoting dialogue between legislators and constituents. Through these initiatives, the Parliament strives to enhance transparency and strengthen its connection with the people.

                          By prioritizing public engagement, the Parliament of Kenya is committed to ensuring that the legislative process remains transparent, accountable, and responsive to the needs of every Kenyan.
                        </p>
                      </div>
                      </div>
                </div>

              </section>


              <section id='structure' className="section structure">
                  <h2 className="section-title">Structure of the Kenyan Parliament</h2>

                  <div className="sub-section bicameral-system">
                          
                  <div className="illustration">
                          <img src="https://ideogram.ai/assets/image/lossless/response/TUIqYfApSDekgEnKZuQZ7A" alt="Bicameral System of the Kenyan Parliament" />
                        
                      </div>
                      <h3 className="sub-section-title">Bicameral System</h3>
                      <p className="sub-section-text">
                          The Parliament of Kenya operates as a bicameral legislature, consisting of two distinct houses:
                      </p>

                      <div className="sub-section-content">
                          <div className="sub-section-item">
                              <h4 className="item-title">National Assembly</h4>
                              <p className="item-description">
                                  The National Assembly, the lower house, includes 290 elected Members of Parliament (MPs), 47 women representatives, and 12 nominated members. It plays a pivotal role in proposing, debating, and passing laws that influence every aspect of Kenyan life.
                              </p>
                          </div>

                          <div className="sub-section-item">
                              <h4 className="item-title">Senate</h4>
                              <p className="item-description">
                                  The Senate, the upper house, is responsible for representing the counties and safeguarding their interests. It is composed of 47 elected Senators, 16 women nominated by political parties, 2 youth representatives, and 2 representatives for persons with disabilities. The Senate reviews and can amend legislation proposed by the National Assembly and addresses county-specific issues.
                              </p>
                          </div>
                      </div>
                     
                      <blockquote className="quote">
                        <FaRegLightbulb style={{ marginRight: '8px', color: 'gold', fontSize: '1.5rem' }} />
                        <p className="quote-text">
                            The Kenyan Parliament’s bicameral structure ensures a thorough examination of legislation, representing both national and local interests to maintain balance and fairness. Did you know? 
                            <ul>
                                <li>The National Assembly, with its 290 MPs, is where much of the nation’s debate and legislation begin.</li>
                                <li>The Senate, which is the upper house, plays a crucial role in safeguarding the rights of the 47 counties across Kenya.</li>
                                <li>The Senate was established under the 2010 Constitution to enhance devolution and give a stronger voice to regional issues.</li>
                                <li>In addition to elected members, the Senate includes representatives for youth and persons with disabilities, ensuring diverse perspectives in lawmaking.</li>
                            </ul>
                        </p>
                    </blockquote>
                              </div>
                          </section>


            {/* Functions and Roles Section */}
            <section id='functions' className="section functions">
              <h2 className="section-title">Functions and Roles</h2>
              <p className="section-text">The primary functions of the Parliament of Kenya include:</p>
              <ul className="sub-section-list modern-list">
                <li className="list-item modern-list-item">
                  <span className="number">1</span>
                  <div className="list-content one">
                    <strong>Legislation:</strong><br /> 
                    Making and passing laws. The Parliament debates proposed laws and either approves, amends, or rejects them. Legislation is crucial for the governance of the country and affects all aspects of society.
                  </div>
                </li>
                <li className="list-item modern-list-item">
                  <span className="number">2</span>
                  <div className="list-content">
                    <strong>Representation:</strong><br /> 
                    Representing the interests and will of the people. Members of Parliament (MPs) represent their constituents' views and concerns, ensuring that the diverse voices of the Kenyan population are heard in the legislative process.
                  </div>
                </li>
                <li className="list-item modern-list-item">
                  <span className="number">3</span>
                  <div className="list-content">
                    <strong>Oversight:</strong><br /> 
                    Monitoring and supervising the executive branch and other government agencies. This function helps to hold the government accountable and ensures that public resources are used effectively and ethically.
                  </div>
                </li>
                <li className="list-item modern-list-item">
                  <span className="number">4</span>
                  <div className="list-content">
                    <strong>Budget Approval:</strong><br /> 
                    Approving government expenditure and revenue collection. The Parliament reviews, modifies, and approves the national budget, which outlines the government's spending priorities and financial plans for the fiscal year.
                  </div>
                </li>
                <li className="list-item modern-list-item">
                  <span className="number">5</span>
                  <div className="list-content">
                    <strong>Constituency Service:</strong><br />
                    Assisting constituents with issues and concerns related to government services. MPs often help resolve local problems and advocate for the needs and interests of their constituents.
                  </div>
                </li>
                <li className="list-item modern-list-item">
                  <span className="number">6</span>
                  <div className="list-content">
                    <strong>International Relations:</strong><br />
                    Participating in international diplomacy and inter-parliamentary activities. The Parliament of Kenya engages with other nations' legislatures and international organizations to promote cooperation and represent Kenya's interests abroad.
                  </div>
                </li>
              </ul>
            </section>

            {/* Parliamentary Committees Section */}
            <section id='committees' className="section committees">
              <h2 className="section-title">Parliamentary Committees</h2>
              <p className="section-text">Parliamentary committees are essential in managing the workload of Parliament and ensuring detailed scrutiny of legislation and government actions. There are several types of committees, including:</p>
              <ul className="sub-section-list">
                <li className="list-item"><strong>Standing Committees:</strong> Permanent committees established by the Standing Orders of Parliament, tasked with specific functions such as finance, foreign affairs, and public accounts.</li>
                <li className="list-item"><strong>Ad Hoc Committees:</strong> Temporary committees formed to address specific issues or investigations, disbanded once their task is completed.</li>
                <li className="list-item"><strong>Joint Committees:</strong> Committees comprising members from both the National Assembly and the Senate, dealing with matters affecting both houses.</li>
                <li className="list-item"><strong>Special Committees:</strong> Committees established to perform special functions or investigations beyond the scope of standing or ad hoc committees.</li>
              </ul>
            </section>

          </div>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>Scroll to Top</button>
      </div>
    </>
  );
}

export default AboutParliament;
