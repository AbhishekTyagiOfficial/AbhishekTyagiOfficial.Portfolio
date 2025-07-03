import React from "react";
import RotatingText from "react-rotating-text";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaJava,
  // FaJs,
  // FaReact,
  FaCogs ,
  FaBug
 
} from "react-icons/fa";
import main from "../assets/main.png";

export default function Home() {
  const rotatingTexts = [
    "Software Engineer",
    "Web Developer",
    "Freelancer",
  ];
  const interval = 1000; // 1 seconds

  return (
    <div className="container" id="home">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="content col-lg-7 pe-lg-5">
          <span className="subtitle text-uppercase">Welcome To My World</span>
          <h1 className="title">
            <span className="text-dark">Hi, I'm</span>{" "}
            <span>Abhishek Tyagi</span>
          </h1>
          <h2 className="rotating-text text-dark">
            a{" "}
            <span>
              <RotatingText items={rotatingTexts} pause={interval} />
            </span>
          </h2>
          <p className="description">
            A versatile professional skilled as a Software Tester, Web Developer, and Freelancer,
            experienced in ensuring software quality through manual and automated testing,
            building responsive websites with modern web technologies,
            and managing client projects independently with timely delivery and clear communication.
          </p>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-12 col-sm-6 social">
              <span className="tiny-title text-uppercase">Find With Me</span>
              <div className="icon-list">
                <a
                  href="https://www.linkedin.com/in/Iamabhishektyagi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://instagram.com/abhinavtyagi2918/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/abhityagi2918/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 skills mt-5 mt-sm-0">
              <span className="tiny-title text-uppercase">Best Skill On</span>
              <ul className="icon-list">
                <li className="icon">
                  <FaBug />
                </li>
                <li className="icon">
                  <FaCogs />
                </li>
                <li className="icon">
                  <b><FaJava /></b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="thumbnail col-lg-5">
          <div className="text-center">
            <img src={main} alt="" style={{ width: "533px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
