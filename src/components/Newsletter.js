import { Col, Row } from "react-bootstrap";
import { FaDownload } from 'react-icons/fa'; 
import cvFile from '../assets/CV-AASSIFAR-Nour-DEC-2024.pdf'; // Import du CV

export const Newsletter = ({ status }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>View My Resume</h3>
            <p>Download my CV to learn more about my work experience and skills.</p>
          </Col>
          <Col md={6} xl={7}>
            <div className="downloadCv">
              <a
                href={cvFile}
                download="CV-AASSIFAR-Nour-DEC-2024.pdf"
                className="button"
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                <FaDownload />
                <span>Download</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};


