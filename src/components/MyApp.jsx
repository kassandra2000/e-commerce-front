import { Container } from "react-bootstrap";
import Feature from "./Feature";
import video from "../assets/about/1.mp4";

const MyApp = () => (
  <>
    <Container fluid className="read-more-section">
      <h2>Show More</h2>
      <p>Read all case studies about our products!</p>
    </Container>
    <Container className="video-container">
      <div>
        <h1 className="mb-4">Download Our <a href="#">App</a></h1>
        <video autoPlay muted loop src={video}></video>
      </div>
    </Container>
    <Feature />
  </>
);

export default MyApp;
