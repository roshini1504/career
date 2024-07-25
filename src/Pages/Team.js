import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Team.css'; 
import { Link } from 'react-router-dom'; 
import it from './it.png'
import cyber from './cyber.png'
import Resources from './Resoures.png'
const Team = () => {
  return (
    <>
      <div id="Teams" className="row mb-4">
        <div className="col-12 text-center">
          <h2 style={{ paddingTop: '110px' }}>It Takes A Team To Reach The Top!</h2>
          <p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)', paddingTop: '30px', marginLeft: '30px' }}>
            Expertise is the fuel that drives a team towards their goals and helps them
          </p>
          <p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)', marginLeft: '30px' }}>
            reach new heights. It takes more than just one individual to achieve greatness.
          </p>
        </div>
      </div>

      <Container className="my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* First Card */}
          <Col>
            <Card className="h-100 mb-4" style={{
              backgroundColor: 'whitesmoke',
              fontSize: 'calc(0.8rem + 0.7vw)'
            }}>
              <img src={it} alt="Client Logo 1"style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{
                  fontWeight: 'bolder',
                  fontSize: 'calc(1.2rem + 0.8vw)'
                }}>IT & Development</Card.Title>
                <Card.Text style={{
                  height: '200px',
                  objectFit: 'cover',
                  fontSize: 'calc(0.7rem + 0.6vw)'
                }}>
                  Look no further than our expert development team! Our team of highly skilled and dedicated IT professionals has years of experience in crafting innovative, customized solutions tailored specifically to meet the unique needs of each client.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Card */}
          <Col>
            <Card className="h-100 mb-4" style={{
              backgroundColor: 'whitesmoke',
              fontSize: 'calc(0.8rem + 0.7vw)'
            }}>
              <img src={cyber} alt="Client Logo 1"style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{
                  fontWeight: 'bolder',
                  fontSize: 'calc(1.2rem + 0.8vw)'
                }}>Cyber Security</Card.Title>
                <Card.Text style={{
                  height: '200px',
                  objectFit: 'cover',
                  fontSize: 'calc(0.7rem + 0.6vw)'
                }}>
                  From firewalls, encryption tools, antivirus software, intrusion detection systems, and penetration testing services - We provide a plethora of effective measures available today that can safeguard your company's valuable information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Third Card */}
          <Col>
            <Card className="h-100 mb-4" style={{
              backgroundColor: 'whitesmoke',
              fontSize: 'calc(0.7rem + 0.6vw)'
            }}>
              <img src={Resources} alt="Client Logo 1"style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{
                  fontWeight: 'bolder',
                  fontSize: 'calc(1.2rem + 0.8vw)'
                }}>Human Resource</Card.Title>
                <Card.Text style={{
                  height: '200px',
                  objectFit: 'cover',
                  fontSize: 'calc(0.7rem + 0.6vw)'
                }}>
                  With an expert team at your side, watch as you unlock unprecedented growth opportunities faster and cheaper than ever before. So don't sweat the small stuff - outsource with confidence today for bigger rewards tomorrow!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
