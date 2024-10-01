import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import a1 from "../assets/about/a1.png";
import a4 from "../assets/about/a4.png";
import a5 from "../assets/about/a5.jpg";
import a6 from "../assets/about/a6.jpg";

const AboutUs = () => {
  const [elementVisibility, setElementVisibility] = useState({});

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll(".fade-in");
    const visibility = {};

    elements.forEach((element) => {
      const positionOfElement = element.getBoundingClientRect();
      visibility[element.id] =
        positionOfElement.top < window.innerHeight &&
        positionOfElement.bottom > 0;
    });

    setElementVisibility(visibility);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount
  }, []);

  return (
    <>
      <Container className="about-section mb-5 pb-4">
        <Row>
          <Col>
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
              Welcome to our e-commerce store! We provide the best fashion items
              focusing on quality, service, and uniqueness.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              id="image"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["image"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <Image src={a1} fluid className="about-image" />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              id="story"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["story"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <h2 className="mt-5">Our Story</h2>
              <p>
                Our journey began in 2010 when our founders, passionate about
                fashion, decided to create a platform where people could find
                the latest trends and timeless pieces. We have grown
                significantly since then, but our commitment to quality and
                customer satisfaction remains the same.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <motion.div
              id="quality"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["quality"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <Card>
                <Image
                  style={{ height: "170px" }}
                  src={a4}
                  fluid
                  className="about-image"
                />
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              id="satisfaction"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["satisfaction"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <Card>
                <Image
                  style={{ height: "170px" }}
                  src={a5}
                  fluid
                  className="about-image"
                />
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              id="styles"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["styles"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <Card>
                <Image
                  style={{ height: "170px" }}
                  src={a6}
                  fluid
                  className="about-image"
                />
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <motion.div
        className="mb-5 pb-5"
        initial="hidden"
        animate={elementVisibility["contact"] ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <Row className=" row-map">
          <Col md={6}>
            <motion.div
              id="contact"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["contact"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <h3>Get in Touch</h3>
              <p>Visit one of our agency locations or contact us today</p>
              <div>
                <p>
                  <strong>Head Office</strong>
                </p>
                <p>56 Glassford Street, Glasgow G1 1UL, New York</p>
                <p>
                  Email:  contact@example.com
                </p>
                <p>
                  Email:  contact@example.com
                </p>
                <p>Monday to Saturday: 9.00am to 16.00pm</p>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              id="map"
              className="fade-in"
              initial="hidden"
              animate={elementVisibility["map"] ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 1 }}
            >
              <iframe
                className="map"
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.732076640485!2d-1.2553!3d51.7548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c162621320d7%3A0x9f6fdf3bdbb74c55!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2suk!4v1652721506033!5m2!1sen!2suk"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default AboutUs;
