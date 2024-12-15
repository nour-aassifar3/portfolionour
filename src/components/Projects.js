import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prj1-3.png";
import projImg2 from "../assets/img/prj1-4.png";
import projImg3 from "../assets/img/prj1-5.png";
import projImg4 from "../assets/img/prj1-6.png";
import projImg5 from "../assets/img/prj1-7.png";
import projImg6 from "../assets/img/prj1-2.png";
import projImg7 from "../assets/img/react1.png";
import projImg8 from "../assets/img/react2.png";
import projImg9 from "../assets/img/react3-1.png";
import projImg10 from "../assets/img/react4.png";
import projImg11 from "../assets/img/react5.png";
import projImg12 from "../assets/img/react6.png";
import projImg13 from "../assets/img/yzk1.png";
import projImg14 from "../assets/img/yzk2.png";
import projImg15 from "../assets/img/yzk3.png";
import projImg16 from "../assets/img/yzk4.png";
import projImg17 from "../assets/img/yzk5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    { title: "E-commerce web site", imgUrl: projImg6 },
    { title: "E-commerce web site", imgUrl: projImg1 },
    { title: "E-commerce web site", imgUrl: projImg2 },
    { title: "E-commerce web site", imgUrl: projImg3 },
    { title: "E-commerce web site", imgUrl: projImg4 },
    { title: "E-commerce web site", imgUrl: projImg5 },
  ];

  const projects2 = [
    { title: "Rent car project", imgUrl: projImg7 },
    { title: "Rent car project", imgUrl: projImg8 },
    { title: "Rent car project", imgUrl: projImg9 },
    { title: "Rent car project", imgUrl: projImg10 },
    { title: "Rent car project", imgUrl: projImg11 },
    { title: "Rent car project", imgUrl: projImg12 },
  ];
  const projects3 = [
    { title: "IoT Dashboard", imgUrl: projImg13 },
    { title: "IoT Dashboard", imgUrl: projImg14 },
    { title: "IoT Dashboard", imgUrl: projImg15 },
    { title: "IoT Dashboard", imgUrl: projImg16 },
    { title: "IoT Dashboard", imgUrl: projImg17 },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Explore my projects, where creativity meets functionality. Each project reflects my passion for coding and my commitment to building innovative, user-friendly solutions. Below are some of the highlights of my work.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          Development of an e-commerce website using Laravel, HTML, CSS, and JavaScript, featuring an admin interface for managing stock and catalog, and a user interface for browsing products, adding items to the cart, purchasing, and secure payment. A responsive and optimized solution ensuring a seamless experience across all devices.
                        </p>
                        <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        Development of a car rental platform using React, allowing users to browse available cars and make reservations seamlessly.
                        </p>
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        This project involves creating a simple web-based dashboard for monitoring and controlling IoT devices. It focuses on building a user-friendly interface to display real-time device statuses and allow basic control (e.g., on/off). The development process includes UI design using HTML, CSS, and JavaScript, integrating data visualization with Chart.js, setting up a backend with Laravel for API and data management, and conducting testing for stability. The project uses SQLServer for data storage and is based on the Adstech VMT9001 IoT terminal.
                        </p>
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
