import React from "react";
import { skillsDetails } from "./constants";
import LinearProgress from "@mui/material/LinearProgress";
import { color } from "../../themes/color";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{skillsDetails.skillTitle}</h2>
        </div>

        <div className="row skills-content">
          {skillsDetails.skills.map((skill, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              key={index}
              data-aos-delay={skill.delay}
            >
              <div className="progress">
                <span className="skill">
                  {skill.language} <i className="val">{skill.value}%</i>
                </span>
                <LinearProgress
                  className="progress-bar-wrap"
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: color._149ddd,
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
