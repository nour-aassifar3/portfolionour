import React from "react";

export const Experiences = () => {
  const experiences = [
    {
      title: "IT Department Internship - Yazaki",
      duration: "September 30, 2024 - Present",
      position: "Technician IT",
      description:
        "Involved in managing systems and networks, providing technical support, maintaining IT infrastructures, and optimizing IT processes within the department. Previously worked on a web development project.",
    },
    {
      title: "End-of-Study Internship - JARYELEC",
      duration: "May 2024",
      position: "Digital Web Full Stack Development Technician",
      description:
        "Worked on customizing the theme of an online store selling electrical and plumbing materials using WordPress.",
    },
    {
      title: "End-of-Study Internship - STM",
      duration: "April 2022 - May 2022",
      position: "IT Maintenance Technician",
      description:
        "Responsible for installing and wiring network equipment, diagnosing and troubleshooting network issues.",
    },
  ];

  return (
    <section className="experiences" id="experiences">
      <div className="container">
        <h2>Experiences</h2>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <h4>{experience.title}</h4>
              <p className="company">
                <strong>{experience.duration}</strong>
              </p>
              {experience.position && <p className="position">{experience.position}</p>}
              <p className="description">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
