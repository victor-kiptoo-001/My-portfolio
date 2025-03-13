import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Victor Kiptoo</span>  
            from <span className="purple">Nairobi, Kenya.</span>
            <br />
            I am a passionate <span className="purple">software engineer</span> who specializes in designing, developing, and maintaining high-quality software solutions.
            <br />
            With a strong problem-solving mindset, I build <span className="purple">innovative, scalable, and efficient applications</span> that drive real-world impact.
            <br />
            My expertise spans <span className="purple">front-end, back-end, and cloud technologies</span>, allowing me to create seamless digital experiences.
            <br />
            <br />
            I am always eager to learn, collaborate, and explore new technologies to stay ahead in the ever-evolving tech landscape. 🚀
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Victor Kiptoo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
