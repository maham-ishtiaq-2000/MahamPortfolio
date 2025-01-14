import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a Computer Scientist who just graduated from the premier IT university COMSATS University Islamabad in Computer Science Majors. I am a highly skilled professional developer who loves to take on the challenges and then solve them.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3. Shopify app using ReactJs, Javascript, ViteJS, nodejs, 
            and Mobile App using React-native.
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
            I have worked on key projects, including building a Progressive Web App for a London-based grocery shop using Shopify APIs. As a freelancer, I developed the complete front end for a startup. I also integrated the Hugging Face API to create a chatbot that acts as a PDF reader.
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
