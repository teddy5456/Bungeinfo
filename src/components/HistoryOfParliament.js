import React, {useState} from 'react';
import './HistoryOfParliament.css';
import { FaRegLightbulb, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HistoryOfBuildings = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
       <div className='background-img'>
        <img src={require('../assets/pikaso_enhance__none_4K_Standard_r_c_.jpeg')} alt="Kenya Parliament Building" />
      </div>

      <div className="history-container1">


        <header className="history-header1">
          <h1>History of <span>Parliamentary Buildings</span></h1>
          <p>Explore the architectural evolution and historical significance of the buildings that house Kenya's Parliament.</p>
        </header>

        <nav className="side-nav1">
         <br/>
          <ul className='ul1'>
          <li>
              <a href="#overview">1906</a>
              <button onClick={toggleDropdown} className="dropdown-toggle">
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#engagement">Engagement</a></li>
                </ul>
              )}
            </li>
            <li><a href="#structure">1924</a></li>
            <li><a href="#functions">1954</a></li>
            <li><a href="#committees">1980</a></li>
          </ul>
            <div className="parliament-facts">
                    <h6 className="facts-title">
                      <FaRegLightbulb style={{ marginRight: '8px', color: 'gold', fontSize: '1.5rem' }} />
                      Did You Know?
                    </h6>

                    <ul className="facts-list1">
                      <li className="facts-item">The parliament was built in the fashion of the Palace of Westminster and the Great Clock of Westminster in London.  </li>
                      <li className="facts-item">The foundation stone which was recovered from the ruins of UK Parliament after a 1941 air raid, was presented to Kenya as a symbol of two countries close relations.</li>
                      <li className="facts-item">Parliament Buildings has been extended in two phases. Both phases were precipitated by constitutional ramifications.</li>
                      
                    </ul>
            </div>
        </nav>

<section className="history-content">

  <h2>Wood and Corrugated Iron Sheet Building along then White House Road (<span>Currently Haile Selassie Avenue</span>)</h2>
  
  <p>
    The Journey of the Parliament in Kenya traces its roots to the colonial period when the Legislative Council (LegCo) was established under the <strong>East African Order-in-Council</strong> in 1906. The LegCo convened its inaugural session on August 16, 1907. This inaugural meeting happened at a makeshift facility located along White House Road, now known as Haile Selassie Avenue, following the official gazettement of the first sitting on 7th August 1907.
  </p>
  
  <div className='building-pic'>
    <img src={require('../assets/Untitled design (1).png')} alt="Wood and Corrugated Iron Sheet Building" />
  </div>

  <p>
    It is worth noting that the first Bill to be brought before the LegCo in the makeshift structure was the Abolition of the Legal Status of Slavery throughout the East African Protectorate. The LegCo continued holding its sittings at this Building or occasionally at Government House (Current State House) either in Nairobi or Mombasa for the next thirteen years until 1920.
  </p>
  
  <blockquote>
    <p>
      Humphrey Slade, in his book, <em>The Parliament of Kenya</em>, writes as follows at pages 59-60—
      "The first Legislative Council of 1907… sat in a small corrugated iron building in Haile Selassie Avenue (then known as Whitehouse Road), Nairobi with no adornment other than two large Union Jack flags on the walls. It continued to meet there, or at Government House in Nairobi or Mombasa, for the next seventeen years."
    </p>
  </blockquote>
  
  <h2>Memorial Hall(<span>Bank of India</span>)</h2>
  <p>
    In the year 1924, accommodation was rented in the Memorial Hall (now the Bank of India) in Kenyatta Avenue (then known as Sixth Avenue, and later as Delamere Avenue), Nairobi. That Hall was furnished at first with tables and chairs; and later, in traditional parliamentary fashion, with massive upholstered benches, facing each other, a dais and special Chair for the Presiding Officer (then the Governor: see Chapter 2), and the Table where the Clerk sat.
    It is at this building that the first African Representative, Eliud Mathu, was nominated by the Governor to represent African interests. It is also at the same building in 1948 that the first speaker Sir. William Horne was appointed to replace the Governor as the presiding officer of the LegCo therefore introducing the office of the Speaker. 
  </p>
  <div className='building-pic'>
    <img src={require('../assets/pikaso_enhance__none_2K_Standard_r_c_.jpeg')} alt="Wood and Corrugated Iron Sheet Building" />
  </div>
  
  <h2>The Inaugural Parliament Buildings</h2>
  <p>
    After thirty years in the Memorial Hall, the Legislative Council moved into Parliament Buildings in the new City Square of Nairobi. The inaugural Parliament Buildings is one of the most iconic infrastructure landmarks in Kenya. Its origin dates back to the pre-independence era, when the British administration commissioned what was then known as the Legislative Building in 1954. These Buildings were officially opened on the 16th February, 1954, construction having started two years previously. It was officially commissioned by the then Governor, Sir Evelyne Barring on 16th February 1954 and it was designed by Mr. Amyas Connell, a distinguished modernist architect and Harold Thornley Dyer town planning advisor to the Kenyan Colonial Government.  
  </p>
  <div className='building-pic'>
    <img src={require('../assets/pikaso_enhance__none_4K_Standard_r_c_ (2).jpeg')} alt="Wood and Corrugated Iron Sheet Building" />
  </div>
  <p>
  The Building featured an English-style clocktower in the fashion of the Palace of Westminster and the Great Clock of Westminster in London.  The Building had one Wing comprising one Chamber (current Senate Chamber), testament of the unicameral pre-independence legislature, and the office block aligned to the Clock Tower. These premises served as the seat of the colonial legislature of Kenya Colony, housing the Legislative Council of Kenya until 1963, when it was succeeded by Kenyans independence bicameral legislature. 
  The foundation stone which was recovered from the ruins of UK Parliament after a 1941 air raid, was presented to Kenya as a symbol of two countries close relations. The designers faced a challenging task when administrators expressed their desire for a scaled-down replica of the Palaces of Westminster to be situated at the heart of Nairobi. Connell needed to accommodate their preferences while ensuring the final design harmonized with the surroundings. Ultimately, he crafted a scaled model of the Big Ben Clock Tower, which, upon completion, stood as the tallest structure in Nairobi. 

  </p>
  
  <section className="stunning-summary">
    <h3 className="summary-title">Key Milestones</h3>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-content">
          <h3><span>1906</span></h3>
          <p>Establishment of the Legislative Council</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-content">
          <h3><span>1907</span></h3>
          <p>First session held on White House Road</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-content">
          <h3><span>1924</span></h3>
          <p>Move to the Memorial Hall, Kenyatta Avenue</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-content">
          <h3><span>1954</span></h3>
          <p>Move to newly constructed Parliament Buildings in Nairobi</p>
        </div>
      </div>
    </div>
  </section>

  <button className="read-more" onClick={() => alert('More information coming soon!')}>Read More</button>

</section>
</div>
    </>
   
  );
};

export default HistoryOfBuildings;