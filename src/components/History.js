import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './History.css'
import Timeline from './Timeline';

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

const History = () => {
  return (
    <div className="history-container">
      <section className="timeline-section">
        <h1>HISTORY OF THE PARLIAMENT OF KENYA</h1>
        <div className="timeline">
    <Timeline events={timelineEvents} />
  </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            dateText="1906"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>Legislative Council Established</h3>
            <p>The LegCo was established following the promulgation of the East African Order-in-Council.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1907"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>First Sitting of LegCo</h3>
            <p>The LegCo held its first sitting on August 16, 1907.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1911"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>Election of Unofficial Members</h3>
            <p>The question of electing Unofficial Members was first brought up by the Convention of Associations.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1917"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>First Election of European Members</h3>
            <p>Legislation was introduced to provide for the election of eleven European Members.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1924"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>Representation of Indians and Arabs</h3>
            <p>The Legislative Council (Amendment) Ordinance provided for representation of Indians and Arabs.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1960"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>First Lancaster House Conference</h3>
            <p>Changes were made to the Lennox Boyd Constitution as a result of the Lancaster House Conference.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1962"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>Formation of Bicameral Parliament</h3>
            <p>The Lancaster Constitution established a Bicameral Legislature with the Senate and House of Representatives.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1966"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>Disbandment of the Senate</h3>
            <p>The Senate was abolished, and a unicameral legislature was formed.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="1970"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>First African Speaker</h3>
            <p>Hon. Fredrick Mbiti G. Mati became the first African Speaker of the National Assembly.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateText="2010"
            dateInnerStyle={{ background: '#e86971' }}
          >
            <h3>New Constitutional Dispensation</h3>
            <p>The 2010 Constitution re-established the Senate and increased the size of the National Assembly.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      <section className="factsheet">
        <h2>THE NATIONAL ASSEMBLY OF KENYA FACTSHEET NO.19</h2>
        <p>Published by: The Clerk of the National Assembly</p>
        <p>Parliament Buildings, Parliament Road, P.O. Box 41842-00100, Nairobi, Kenya</p>
        <p>Tel: +254 20 221291, 2848000</p>
        <p>Email: nationalassembly@parliament.go.ke</p>
        <p>www.parliament.go.ke</p>
        <p>© The National Assembly of Kenya 2022</p>
        <p>First Published 2017, Second Edition; August 2022</p>
        <p>Prepared by: The National Assembly Taskforce on Factsheets, Speaker's Rulings and Guidelines</p>
        <p>Printed by: Design & Layout: Gitonga Ruchiami</p>
      </section>

      <section className="purpose">
        <h3>Purpose and Acknowledgement</h3>
        <p>This Factsheet is part of the Kenya National Assembly Factsheets Series developed to enhance public understanding and awareness, and to build knowledge on the work of the Assembly and its operations. It serves as a guide for Members of Parliament, staff, and the public. The information is not exhaustive, and readers are advised to refer to original sources for further information.</p>
        <p>Special thanks to the members of the National Assembly Taskforce on Factsheets, Speaker’s Rulings and Guidelines:</p>
        <ul>
          <li>Mr. Kipkemoi arap Kirui (Team Leader)</li>
          <li>Mr. Rana Tiampati</li>
          <li>Mr. Kennedy Malinda</li>
          <li>Ms. Anna Musandu</li>
          <li>Mr. Samuel Kalama</li>
          <li>Mr. Salem Lorot</li>
          <li>Ms. Fiona Musili</li>
          <li>Mr. Benson Inzofu</li>
          <li>Ms. Laureen Wesonga</li>
          <li>Ms. Anne Shibuko</li>
          <li>Mr. James Maina Macharia</li>
          <li>Mr. Morrice Shilungu</li>
          <li>Mr. Finlay Muriuki</li>
          <li>Ms. Rabeca Munyao</li>
          <li>Mr. Stephen Omunzi</li>
        </ul>
      </section>

      <section className="background">
        <h3>Background</h3>
        <p>The inception of the Legislative Assembly in Kenya dates back to the colonial era when the Legislative Council (LegCo) was constituted through the issuance of the East African Order-in-Council in 1906. The LegCo held its first sitting on 16th August 1907. The primary purpose of setting up the LegCo was to safeguard the interests of the white settlers and formulate local laws. Later, the LegCo served as a legislature for the East Africa Protectorate.</p>
        <p>The first sitting of the Legislative Council on August 16th 1907.</p>
        <p>The first Bill brought before it was the Abolition of the Legal Status of Slavery throughout the East African Protectorate. The LegCo had seven members, all Europeans. The composition included the Governor as Chairperson, six other members (four civil servants and two nominated by the Governor). The LegCo was modeled on the Westminster Parliamentary Model.</p>
      </section>

      <section className="chronology">
        <h3>The Chronology of Evolution of the Legislature</h3>
        <ul>
          <li><strong>1906:</strong> LegCo established following the promulgation of the East African Order-in-Council.</li>
          <li><strong>1907:</strong> First sitting of LegCo on August 16th.</li>
          <li><strong>1911:</strong> The question of electing Unofficial Members was raised but not yet acted upon.</li>
          <li><strong>1917:</strong> Nominated Members resigned but resumed their seats with legislation for eleven European Members.</li>
          <li><strong>1919:</strong> Composition of the LegCo altered to include elected European members.</li>
          <li><strong>1924:</strong> Legislative Council (Amendment) Ordinance provided for the representation of Indians and Arabs.</li>
          <li><strong>1944:</strong> Mr. Eliud Mathu became the first African nominated to the LegCo.</li>
          <li><strong>1960:</strong> Changes made to the Lennox Boyd Constitution as a result of the Lancaster House Conference.</li>
          <li><strong>1962:</strong> Formation of a Bicameral Legislature under the Lancaster Constitution.</li>
          <li><strong>1966:</strong> Abolition of the Senate and reformation into a unicameral legislature.</li>
          <li><strong>1970:</strong> Hon. Fredrick Mbiti G. Mati became the first African Speaker.</li>
          <li><strong>2010:</strong> The Constitution of Kenya provided for a Bicameral Parliament and increased the National Assembly to 350 seats.</li>
        </ul>
      </section>

      <section className="independence">
        <h3>The Independence of Parliament in Kenya</h3>
        <p>In the run-up to independence, the LegCo was chaired by the Colonial Governor until 1948 when the first Speaker was appointed. Kenya attained independence in 1963 and transitioned from a dominion within the British Commonwealth to a republic.</p>
      </section>
    </div>
  );
};

export default History;
