import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hassan Khan </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple"> Drox Labs</span>.
            <br />I am currently pursuing Masters in Global Software Development
            from
            <span className="purple">
              {" "}
              Fulda University of Applied Sciences, Germany.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To make a difference, start with a single step forward."{" "}
          </p>
          <footer className="blockquote-footer">Hassan Khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
