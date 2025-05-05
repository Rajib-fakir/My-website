import React, { useEffect, useState } from "react";

const skills = [
  { name: "Html", level: 90 },
  { name: "Css", level: 85 },
  { name: "Javascript", level: 80 },
  { name: "React", level: 85 },
  { name: "Nodejs", level: 80 },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300); // Delay before animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container pb-5 my-4">
      <h2 className="mb-4 text-center text-light">Skills</h2>
      <hr />
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <h5 className="mb-1 text-light">{skill.name}</h5>
          <div className="progress" style={{ height: "25px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: loaded ? `${skill.level}%` : "0%",
                transition: "width 1s ease-in-out",
              }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;