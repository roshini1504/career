import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import './Home.css';
import slide1 from './slide1.png'
import slide2 from './slide2.jpeg'
import slide3 from './slide3.jpeg'

function Home() {
  const [showMore, setShowMore] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);
  const [anotherOpen, setAnotherOpen] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            data-mdb-animation="fade-in"
            data-mdb-animation-start="onLoad"
            data-mdb-animation-delay="3000"
            src={slide1} alt="slide 1"/>
          <Carousel.Caption>
            <div className="carousel-caption">
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2} alt="slide 2"/>
          <Carousel.Caption>
            <div className="carousel-caption">
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3} alt="slide 3"/>
          <Carousel.Caption>
            <div className="carousel-caption">
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid" id="why-us">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4" style={{ marginTop: '50px' }}>Why Us?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p style={{
              marginTop: '90px',
              fontSize: '20px',
              textAlign: 'justify',
              paddingLeft: '30px',
              paddingRight: '30px'
            }}>
              {showMore ? (
                <span>
                  FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm with a highly diversified and flexible approach of providing expert quality on end-to-end solutions for customers.
                  FSF Global IT Solutions offers a range of products and services including cloud computing solutions, cybersecurity services, artificial intelligence (AI) and machine learning (ML) platforms, and Internet of Things (IoT) integration.
                </span>
              ) : (
                <span>
                  FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm...
                  <Button variant="link" onClick={handleShowMore}>Read more</Button>
                </span>
              )}
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card style={{ border: 'none', marginTop: '70px' }}>
              <Card.Body>
                <Button
                  style={{
                    height: 70,
                    fontSize: 36,
                    backgroundColor: hoverOpen ? 'brown' : 'whitesmoke',
                    color: hoverOpen ? 'whitesmoke' : 'black',
                    boxShadow: 'none',
                    border: 'none',
                    width: '100%',
                  }}
                  onClick={() => {
                    setHoverOpen(!hoverOpen);
                    setClickOpen(false);
                    setAnotherOpen(false);
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={hoverOpen}
                  className="btn-block"
                >
                  Expert R&S
                </Button>
                <Collapse in={hoverOpen}>
                  <Card.Text style={{ backgroundColor: hoverOpen ? 'brown' : 'whitesmoke', color: hoverOpen ? 'whitesmoke' : 'black', fontSize: 20 }} className="text-center">
                    We believe that the planning and execution of the product should have a high priority over effortless execution for a successful approach of solving the real-time problems with utmost analysis.
                  </Card.Text>
                </Collapse>
                <div style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      height: 70,
                      fontSize: 36,
                      backgroundColor: clickOpen ? 'brown' : 'whitesmoke',
                      color: clickOpen ? 'whitesmoke' : 'black',
                      boxShadow: 'none',
                      border: 'none',
                      width: '100%',
                    }}
                    onClick={() => {
                      setClickOpen(!clickOpen);
                      setHoverOpen(false);
                      setAnotherOpen(false);
                    }}
                    aria-controls="example-collapse-text"
aria-expanded={clickOpen}
className="btn-block"
>
Tech Expertise
</Button>

<Collapse in={clickOpen}>
  <Card.Text
    style={{
      backgroundColor: clickOpen? 'brown' : 'whitesmoke',
      color: clickOpen? 'whitesmoke' : 'black',
      fontSize: 20,
    }}
    className="text-center"
  >
    Our team consists of expert and well-known industry leaders
    with a focused version of implementing the high-quality
    solution deployments and finding the best talent for
    outsourcing and working with leading companies.
  </Card.Text>
</Collapse>

<div style={{ marginTop: 40 }}>
  <Button
    style={{
      height: 70,
      fontSize: 36,
      backgroundColor: anotherOpen? 'brown' : 'whitesmoke',
      color: anotherOpen? 'whitesmoke' : 'black',
      boxShadow: 'none',
      border: 'none',
      width: '100%',
    }}
    onClick={() => {
      setAnotherOpen(!anotherOpen);
      setHoverOpen(false);
      setClickOpen(false);
    }}
    aria-controls="example-collapse-text"
    aria-expanded={anotherOpen}
    className="btn-block"
  >
    Execution
  </Button>

  <Collapse in={anotherOpen}>
    <Card.Text
      style={{
        backgroundColor: anotherOpen? 'brown' : 'whitesmoke',
        color: anotherOpen? 'whitesmoke' : 'black',
        fontSize: 20,
      }}
      className="text-center"
    >
      Our work has been recognised and had been vouched by
      several industry experts and have been thriving over the
      best-in-class service providing and improved service
      performance over the years.
    </Card.Text>
  </Collapse>
  </div>
</div>
</Card.Body>
          </Card>
        </div>
      </div>
    </div>
</>
  );
}
export default Home;