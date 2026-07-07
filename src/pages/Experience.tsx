import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dynatronfavicon from '../assets/logos/dynatron-favicon.png';
import iherbfavicon from '../assets/logos/iherb-favicon.png';
import shopritefavicon from '../assets/logos/shoprite-favicon.png';
import walmartfavicon from '../assets/logos/walmart-favicon.png';

function Experience() {
  return (
    <div className="main">
      <div className="experienceDiv">
        <h2>Professional Experience</h2>
        <h3>4+ years of professional engineering experience</h3>
      </div>

      <VerticalTimeline
        lineColor={'var(--textColor)'}>

        <VerticalTimelineElement
          className="verticalTimeline"
          contentStyle={{ background: 'var(--boxColor)' }}
          contentArrowStyle={{ borderRight: '20px solid  var(--boxColor)' }}
          dateClassName="verticalTimeline"
          date="February 2022 - February 2026"
          iconStyle={{ background: 'var(--bg)', color: 'var(--textColor)' }}
          icon={<img src={ dynatronfavicon } alt="Dynatron" />}
        >
          <h3>Dynatron Software</h3>
          <h3>Software Engineer</h3>
          <p>ETL Engineering, API Integrations, Automating Testing, Auditing and Cleaning Data, Support Triage</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalTimeline"
          contentStyle={{ background: 'var(--boxColor)' }}
          contentArrowStyle={{ borderRight: '20px solid  var(--boxColor)' }}
          date="February 2021 - February 2022  "
          iconStyle={{ background: 'var(--bg)', color: 'var(--textColor)' }}
          icon={<img src={ iherbfavicon } alt="iHerb" />}
        >
          <h3>iHerb</h3>
          <h3>Warehouse Operations Associate</h3>
          <p>Picking, Packing, Shipping, Taping</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalTimeline"
          contentStyle={{ background: 'var(--boxColor)' }}
          contentArrowStyle={{ borderRight: '20px solid  var(--boxColor)' }}
          date="August 2019 - February 2021"
          iconStyle={{ background: 'var(--bg)', color: 'var(--textColor)' }}
          icon={<img src={ walmartfavicon } alt="WalMart" />}
        >
          <h3>Walmart</h3>
          <h3>Sales Associate</h3>
          <p>Zoning, Stocking, Inventory Management, Customer Service</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalTimeline"
          contentStyle={{ background: 'var(--boxColor)' }}
          contentArrowStyle={{ borderRight: '20px solid  var(--boxColor)' }}
          date="December 2018 - August 2019"
          iconStyle={{ background: 'var(--bg)', color: 'var(--textColor)' }}
          icon={<img src={ shopritefavicon } alt="ShopRite" />}
        >
          <h3>Shoprite</h3>
          <h3>Cashier</h3>
          <p>Cashier, Self Checkout, Customer Service, Front End Management</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="experienceDiv standardCard">
        <h2>Technology Stack</h2>
        <hr></hr>
        <h3>Front End:</h3>
        <h4>JavaScript/TypeScript, HTML, CSS</h4>
        <h3>Back End:</h3>
        <h4>PHP, Python, T-SQL</h4>
        <h3>Frameworks/Libraries:</h3>
        <h4>React, Laravel, FastAPI</h4>
        <h3>Databases:</h3>
        <h4>Snowflake, MySQL, Microsoft SQL Server, PostgreSQL</h4>
        <h3>Tools:</h3>
        <h4>Docker, Node.js, Git, Linux </h4>
      </div>

    </div>
  )
}

export default Experience