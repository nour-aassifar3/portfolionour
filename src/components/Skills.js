import React, { useState } from "react";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Professional");

  const skillsData = [
    { type: "Professional", skills: ["Frontend", "Backend", "Network Installation and Management", "Linux (CentOS)", "Windows (Server 2012)"] },
    { type: "Personal", skills: ["Adaptability", "Teamwork", "Punctuality", "Creativity", "Seriousness"] },
    { type: "Languages", skills: ["Arabic: Bilingual", "Spanish: Intermediate", "French: Intermediate", "English: Fair"] },
    {
      type: "Technical",
      skills: [
        "Windows (7, 10, 11)",
        "PHP5, HTML5, CSS3, JavaScript",
        "Laravel, ReactJS",
        "Merise, UML",
        "Visual Studio, Packet Tracer, VMware, Figma",
        "WordPress, Prestashop",
      ],
    },
  ];

  const filteredSkills = skillsData.find((category) => category.type === selectedCategory);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="skill-filters">
          {skillsData.map((category) => (
            <button
              key={category.type}
              className={`filter-button ${selectedCategory === category.type ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.type)}
            >
              {category.type}
            </button>
          ))}
        </div>
        <div className="skills-body">
          {filteredSkills?.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
