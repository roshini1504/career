import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './Services.css';

const Services = () => {
    
  return (
    <section id="services" className="Services" style={{ backgroundColor: 'white' }}>
      <Container fluid>
         <h2 className="text-center mb-5">Services</h2> 
        <p className="services-list" style={{ fontSize: '20px', marginTop: '95px' }}>
          Our Services Consist of: UI/UX, Product Development (Web/Mobile), Cloud Migration, Saas Application Development, Server Management, Resource Outsourcing, US IT Staffing, SAP Training & Development, Robotics and Corporate Event Management.
        </p>
      </Container>

      {/* Three Boxes Section */}
      <section className="ThreeBoxes">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-cloud" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3>Digital Transformation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px' }}>
                    Uncover the Possibilities of Digital Transformation with Cloud Integrated Product Development.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-terminal" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3>IoT Solution Integrations</h3>
                  <p className="margin b-6" style={{ fontSize: '20px' }}>
                    Unlock The Power of Connectivity with IoT Solution Integration in various industries and domains.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-robot" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3>Industrial Automation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px' }}>
                    Automate Your Business Processes With Powerful AI/Ml Integrated Method Solution Implementations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Additional Row of Boxes */}
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-lock" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out' }}>Information Security</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Keep Your Data Safe With Our Top-Notch Cyber/Data Security Solution Deployments.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-people" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out' }}>Staff Augmentation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Accelerate Your Company's Growth with our Professional Staff Augmentation and Outsourcing.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                <div className="service-element">
                  <i className="bi bi-file-earmark-spreadsheet" style={{ fontSize: '56px', color: 'maroon' }}></i>
                </div>
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out' }}>SAP Solutions</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Helping Peers to Learn, Grow & Succeed with our SAP Training and Development Program!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default Services;
