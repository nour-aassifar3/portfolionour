import React from "react";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export const Formations = () => {
    const formations = [
        {
          title: "Specialized Technician Diploma in Digital Web Full Stack Development",
          institute:
            "Specialized Institute in the Offshoring and New Information and Communication Technologies – Tangier",
          years: "2022 – 2024",
          description:
            "Mastery of front-end and back-end development using modern web technologies to meet the current and future demands of the digital sector.",
        },
        {
          title: "Specialized Technician Diploma in Computer Networks",
          institute:
            "Specialized Institute in the Offshoring and New Information and Communication Technologies – Tangier",
          years: "2020 – 2022",
          description:
            "Configuration and optimization of computer networks with a focus on security, infrastructure management, and problem resolution.",
        },
        {
          title: "Baccalaureate in Physical and Chemical Sciences",
          institute: "Oued Eddahab Asilah",
          years: "2019 – 2020",
          description: "Graduated with honors (Good Mention).",
        },
        {
          title: "CISCO Certifications",
          institute: "Introduction to Networks",
          years: "2022",
          description:
            "Routing, switching, wireless essentials, network security, and enterprise automation.",
        },
        {
          title: "Spanish Language Certificate",
          institute: "Cervantes Institute Tangier",
          years: "2021 – 2022",
          description: "Achieved certification in Spanish language proficiency.",
        },
  ];

  return (
    <section className="formations" id="formations">
      <div className="container">
        
        <div className="formation-list">
        <h2>Formations</h2>
          {formations.map((formation, index) => (
            <div key={index} className="formation-block">
              <h5>{formation.title}</h5>
              <p className="institute">
                {formation.institute}  |  {formation.years}
              </p>
              <p className="description">{formation.description}</p>
              {index < formations.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
