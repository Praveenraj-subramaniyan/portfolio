import "./App.css";
import profile from "./images/profile.jpg";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [isVisible, setIsVisible] = useState({
    ischatbox: "visually-hidden",
  });
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "Hi Praveen,\n",
  });
  function visibilityTrue() {
    setIsVisible({
      ischatbox: "visually-true",
    });
  }
  function visibilityHidden() {
    setIsVisible({
      ischatbox: "visually-hidden",
    });
  }
  function handleData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setSendMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const url = "https://portfolionode-guui.onrender.com/bot";
    axios
      .post(url, sendMessage)
      .then((res) => {
        alert("Message sent successfully");
      })
      .catch((error) => {
        alert("Error in sending message" + error);
      });
    visibilityHidden();
    setSendMessage((prevState) => ({
      name: "",
      email: "",
      mobile: "",
      message: "Hi Praveen,\n",
    }));
  }
  return (
    <div class="mainDiv">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  <i class="fa fa-home " aria-hidden="true"></i>Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="home mx-auto " id="home">
        <div class="row content">
          <div class="col-sm-4">
            <img class="img-thumbnail" src={profile} alt="Profile" />
          </div>
          <div class="col-sm-8">
            <h4>Praveenraj Subramaniyan | Certified Full Stack Developer</h4>
            <p class="startp">
              Junior software developer with over 1+ year of experience in
              windows and web application development. Proficient in ASP.NET
              Core with experience in SQL and database migration. Skilled in
              creating new tools for updating values in a database from GitHub
              API and triggering Azure pipeline in C# using API. Familiar with
              Azure DevOps and AWS Cloud.
            </p>
            <a
              href="mailto:spr887011@gmail.com?body=Hi%20Praveen,"
              onclick="window.location=another.html"
              class="emailid"
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
              spr887011@gmail.com
            </a>
            <br></br>
            <br></br>
            <a
              href="tel:8870118193"
              onclick="window.location=another.html"
              class="emailid"
            >
              <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>+91
              8870118193
            </a>
          </div>
          <div class="row icondiv mx-auto">
            <div class="col-sm-4 iconsubdiv">
              <a
                href="https://github.com/orgs/Praveenraj-subramaniyan/repositories"
                target="_blank"
              >
                <button class="btn btn-dark buttommargin">
                  <i class="fa fa-github"></i>Github
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-raj-132bbb22a/"
                target="_blank"
              >
                <button class="btn btn-primary buttommargin">
                  <i class="fa fa-linkedin"></i>LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="experience mx-auto content" id="experience">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Work Experience</h4>
          </div>
          <div class="col-sm-8">
            <h6>
              Software Developer - <spam>Syncfusion Software</spam>
            </h6>
            <p>Nov,2021 - Mar,2023</p>
            <p>
              • 1+ years experience as junior software developer in syncfusion
              software
            </p>
            <p>• Web application development in ASP.NET Core</p>
            <p>
              • Create new tools for update value in database and Trigger Azure
              pipeline in C# using API
            </p>
            <p>
              • Windows application development using Final builder, WIX,
              bootstrapper
            </p>
            <p>
              • Azure DevOps – Virtual Machine , Image , Virtual Machine Scale
              Set, Pipeline and Azure SQL .
            </p>
            <p>• Database migration, GIT, AWS Cloud.</p>
          </div>
        </div>
      </div>
      <div class="education mx-auto content" id="education">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Education</h4>
          </div>
          <div class="col-sm-8">
            <h6>Bachelor Of Engineering</h6>
            <p>Jun,2017 - Jun,2021</p>
            <p>
              <span class="Sideheading">Institute : </span>Mookambigai College
              of Engineering
            </p>
            <p>
              <span class="Sideheading">Branch : </span>Computer Science
            </p>
            <br />
            <h6>Full Stack Developer</h6>
            <p>Mar, 01 ,2023 - July, 15, 2023</p>
            <p>
              <span class="Sideheading">Institute : </span>Guvi Geeks
            </p>
            <p>
              <span class="Sideheading">Course : </span>MERN Stack
            </p>
          </div>
        </div>
      </div>
      <div class="project mx-auto content" id="project">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Projects</h4>
          </div>
          <div class="col-sm-8">
            <p>
              <strong>1.Project Title :</strong> Swiggy Clone
            </p>
            <p>
              <strong>Project Description : </strong>Developed a web application
              similar to Swiggy, a food delivery platform, using the{" "}
              <b>MERN stack </b>
              (MongoDB, Express.js, React, and Node.js). The application allows
              users to search for restaurants, view menus, and place orders for
              delivery.
            </p>
            <p>
              <span class="Sideheading">Key Skills Demonstrated : </span>
              <ul>
                <li>Javascript programming (React JS, Node JS)</li>
                <li>API integration</li>
                <li>Responsive user interface design</li>
                <li>
                  CRUD (Create, Read, Update, Delete) operations using MongoDB.
                </li>
              </ul>
            </p>
            <p>
              <span class="Sideheading">Front-end Source code: </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/swiggy-client/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/swiggy-client
              </a>
            </p>
            <p>
              <span class="Sideheading">Back-end Source code : </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/swiggy-server/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/swiggy-server
              </a>
            </p>
            <p>
              <span class="Sideheading">Link to Project : </span>
              <a
                href="https://master--praveenswiggycloneapp.netlify.app/"
                target="_blank"
              >
                https://master--praveenswiggycloneapp.netlify.app/
              </a>
            </p>
            <br />
            <p>
              <strong>2.Project Title :</strong> Customer Relationship
              Management - CRM
            </p>
            <p>
              <strong>Project Description : </strong>Developed a web-based CRM
              dashboard and customer management system using the
              <b>MERN stack </b>
              (MongoDB, Express.js, React, and Node.js). The application allows
              businesses to manage their customer relationships.
            </p>
            <p>
              <span class="Sideheading">Key Skills Demonstrated : </span>
              <ul>
                <li>Javascript programming (React JS, Node JS)</li>
                <li>API integration</li>
                <li>Responsive user interface design</li>
                <li>
                  CRUD (Create, Read, Update, Delete) operations using MongoDB.
                </li>
              </ul>
            </p>
            <p>
              <span class="Sideheading">Front-end Source code: </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/crm_client/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/crm_client
              </a>
            </p>
            <p>
              <span class="Sideheading">Back-end Source code : </span>
              <a
                href="https://github.com/Praveenraj-subramaniyan/crm_server/"
                target="_blank"
              >
                https://github.com/Praveenraj-subramaniyan/crm_server
              </a>
            </p>
            <p>
              <span class="Sideheading">Link to Project : </span>
              <a
                href="https://stellar-rolypoly-618bc4.netlify.app/"
                target="_blank"
              >
                https://stellar-rolypoly-618bc4.netlify.app/
              </a>
            </p>
            {/* <h6>Full Stack Developer</h6>
            <p>Mar,2023 - Inprogress</p>
            <p>
              <span class="Sideheading">Institute : </span>Guvi Geeks
            </p>
            <p>
              <span class="Sideheading">Course : </span>MERN Stack
            </p> */}
          </div>
        </div>
      </div>
      <div class="skills mx-auto content" id="skills">
        <div class="row content">
          <div class="col-sm-4">
            <h4>Skills</h4>
          </div>
          <div class="col-sm-8">
            <h6>Language Known</h6>
            <p>C#, JavaScript, React JS, Node JS, Java, Python</p>
            <br />
            <h6>Database</h6>
            <p>SQL, MongoDB</p>
          </div>
        </div>
        <div class="chatdiv">
          <div class="chaticon">
            <i
              class="fa fa-commenting fa-4x chat "
              aria-hidden="true"
              onClick={visibilityTrue}
            ></i>
          </div>
          <div
            className={`container mt-3 chatbox img-thumbnail ${isVisible.ischatbox}`}
          >
            <form id="loginForm" onSubmit={handleSubmit}>
              <div class="mb-3 mt-3">
                <button
                  class="btn btn-dark closeButton"
                  onClick={visibilityHidden}
                  type="button"
                >
                  x
                </button>
              </div>
              <div class="mb-3 mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name*"
                  required
                  pattern="^\s*(\w+\s+){0,19}\w+\s*$"
                  title="Max 20 characters is allowed"
                  value={sendMessage.name}
                  name="name"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email*"
                  required
                  value={sendMessage.email}
                  name="email"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile"
                  pattern="^\d{10}$"
                  title="Max 10 digit is allowed."
                  value={sendMessage.mobile}
                  name="mobile"
                  onChange={handleData}
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message*"
                  required
                  value={sendMessage.message}
                  name="message"
                  onChange={handleData}
                />
              </div>
              <button type="submit" class="btn btn-dark sendbtn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
