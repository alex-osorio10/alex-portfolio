import React from 'react';
import mhccLogo from './assets/images/mhcc_main_logo.png'; // Corrected path for MHCC logo
import psuLogo from './assets/images/psu_main_logo_green.png'; // Corrected path for PSU logo

function Experience() {
  return (
    <div className="experience-section">
      <h1 className="experience-title">EXPERIENCE</h1>
      <div className="experience-container">
        {/* Left side with the work experience title and scrollbox */}
        <div className="experience-left-container">
          <h2 className="sub-title">Work Experience</h2>
          <div className="experience-left">
            <div className="experience-entry">
              <h3><strong>Alticam Vision</strong> - <i>Intern</i> (June 2023 - Aug. 2023)</h3>
              <p>▪ Enhanced Alticam’s customer user interface for consumer usability.</p>
              <p>▪ Developed and optimized an extraction device for the user system, supporting entire subfolder extraction using C# and GitKraken.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Walmart</strong> - <i>Retail Associate</i> (Feb. 2023 - June 2023)</h3>
              <p>▪ Elevated customer satisfaction and sales by delivering customer assistance and customer-friendly environment.</p>
              <p>▪ Arranged items on shelves and moved heavy crates of perishable food products to refrigerators.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Innovative Composite Engineering</strong> - <i>Composite Technician</i> (Jul. 2025 - Dec. 2025)</h3>
              <p>▪ Improved efficiency and quality of materials by following precise methods.</p>
              <p>▪ Operated tools and machinery to cut, laminate, wrap, cure, and finish parts.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>New Moon Aviation</strong> - <i>Outreach and Marketing Assistant</i> (Jul. 2025 - Dec. 2025)</h3>
              <p>▪ Assisted with website updates, flyers, social media, and event promotions.</p>
              <p>▪ Advanced outreach and visibility through marketing, contributing to rebranding efforts.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Alticam Vision</strong> - <i>Intern</i> (June 2023 - Aug. 2023)</h3>
              <p>▪ Enhanced Alticam’s customer user interface for consumer usability.</p>
              <p>▪ Developed and optimized an extraction device for the user system, supporting entire subfolder extraction using C# and GitKraken.</p>
            </div>
          </div>
        </div>

        {/* Right side with the logos and graduation date */}
        <div className="experience-right">
          <h2 className="education-title">Education</h2>
          <div className="graduation-info">
            <div className="graduation-entry">
              <div className="college-text">
                <p className="college-name-major">
                  Mt. Hood Community College - Associate of Science Transfer in Computer Science
                </p>
                <p className="graduation-date">▪ Graduation Date: December 2023</p>
              </div>
              <img src={mhccLogo} alt="Mt. Hood Community College Logo" className="experience-logo" />
            </div>

            <div className="graduation-entry">
              <div className="college-text">
                <p className="college-name-major">
                  Portland State University - Bachelors of Computer Science
                </p>
                <p className="graduation-date">▪ Graduation Date: December 2025</p>
              </div>
              <img src={psuLogo} alt="Portland State University Logo" className="experience-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
