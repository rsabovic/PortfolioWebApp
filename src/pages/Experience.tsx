function Experience() {
  return (
    <div className="main">
      <div className="experienceDiv">
        <h2>Professional Experience</h2>
        <h3>4+ years of professional engineering experience</h3>
      </div>

      <div className="invisibleCard">
        <div className="experienceDiv">
          <h3>February 2022 - February 2026</h3>
          <h3>Software Engineer @ Dynatron Software</h3>
          <p>Primarily focused on creating and maintaing ETL Pipelines that were integrated with RESTful APIs.</p>
          <p>Implemented front end changes to support new back end user features.</p>
          <p>Automate manual data audits using Python.</p>
        </div>
        <hr></hr>
        <div className="experienceDiv">
          <h3>February 2021 - February 2022</h3>
          <h3>Warehouse Operations Associate @ iHerb</h3>
          <p>Fulfilled logistics behind receiving, processing, and storing inventory.</p>
        </div>
        <hr></hr>
        <div className="experienceDiv">
          <h3>August 2019 - February 2021</h3>
          <h3>Sales Associate @ Walmart</h3>
          <p>Ensured merchandise was stocked and aisles were neat as well as assisting customers as needed.</p>
        </div>
        <hr></hr>
        <div className="experienceDiv">
          <h3>December 2018 - August 2019</h3>
          <h3>Cashier @ Shoprite</h3>
          <p>Worked on registers as well as supervising self checkout.</p>
        </div>
        <hr></hr>
      </div>

      <div className="experienceDiv standardCard">
        <h2>Technology Stack</h2>
        <hr></hr>
        <h3>Front End:</h3>
        <p>HTML, CSS, JavaScript</p>
        <h3>Back End:</h3>
        <p>PHP, Python, SQL</p>
        <h3>Frameworks/Libraries:</h3>
        <p>React, Laravel, FastAPI</p>
        <h3>Databases:</h3>
        <p>Snowflake, MySQL, Microsoft SQL Server, PostgreSQL</p>
        <h3>Tools:</h3>
        <p>Docker, Node.js, Git, Linux </p>
      </div>

    </div>
  )
}

export default Experience