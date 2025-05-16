import React from "react";
import { FaBookReader, FaBriefcase } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";


const Resume = () => {
  return (
    <div>
      {/* education */}
      <section>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <div className="timeline">
          <div className="title-wrapper">
            <FaBookReader className="icon-box" />
            <h3 className="h3 ">Education</h3>
          </div>
          <ol className="timeline-list">
            <TimelineItem
              title="Tribhuwan University"
              date="2021-2025"
              description="Pursuing a Bachelor's degree in Computer Science and Information Technology (BSc. CSIT), focusing on software development, algorithms, and data structures."
            />
            <TimelineItem
              title="Tribhuwan Secondary School"
              date="2018-2020"
              description="Completed higher secondary education with a focus on science, including physics, chemistry, and mathematics."
            />
            <TimelineItem
              title="Baljyoti Academy Bardiya"
              date="2010-2018"
              description="Completed primary and secondary education, building a strong foundation in academics and extracurricular activities."
            />
          </ol>
        </div>
      </section>

      {/* experience */}

      <section>
        <div className="timeline">
          {/* Title Section */}
          <div className="title-wrapper">
            <FaBriefcase className="icon-box" />
            <h3 className="h3 ">Experience</h3>
          </div>

          {/* Experience List */}
          <ol className="timeline-list">
            <TimelineItem
              title="Aspire Asia"
              date="2024-2025"
              description="Worked as a React Intern, developing dynamic UI components, implementing API integrations, and enhancing user experiences with modern web technologies."
            />
            <TimelineItem
              title="Softix Corporation"
              date="2023-2024"
              description="Gained experience as a Frontend Intern, building responsive websites using HTML, CSS, and JavaScript, and optimizing web performance for better user engagement."
            />
            <TimelineItem
              title="SoftTech Foundation"
              date="2022-2023"
              description="Flutter Intern responsible for developing cross-platform mobile applications, integrating Firebase for backend services, and optimizing app performance."
            />
          </ol>
        </div>
      </section>

      {/* skill section */}
      <section>
        <div className="skill">
          <h3 className="h3 skills-title">My skills</h3>{" "}
          <ul className="skills-list content-card">
            <SkillItem title='Web Design' value={80} />
            <SkillItem title='Flutter' value={50} />
            <SkillItem title='Branding' value={75} />
            <SkillItem title='React' value={30} />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
