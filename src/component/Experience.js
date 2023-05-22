import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="#7d1eca" >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2025"
          iconStyle={{ background: "#7d1eca", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          The National Institute of Posts and Telecommunications (INPT)
          </h3>
          
          <p>Software Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: "#7d1eca", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          CPGE Omar Ibn Al-Khattab, Meknes, Morocco
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          intensive mathematics, physiques, engineering science and computer science.
          </h4>

          <p> Preparatory Classes</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#7d1eca", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Moulay Ismail high school, Meknes, Morocco
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Graduated with honers and a diploma in Mathematical Science/Engineering Science
          </h4>

          <p> High School Diploma</p>
        </VerticalTimelineElement>
        
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;