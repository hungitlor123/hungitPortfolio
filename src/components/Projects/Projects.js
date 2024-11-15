import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import HairSalon from "../../Assets/Projects/hairsalonFE.png";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Mommilk from "../../Assets/Projects/Mommilk.png";
import Billiards from "../../Assets/Projects/images.jpg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Mommilk}
              title="MomMilk Front-End Project"
              description="MomMilk is an e-commerce platform for pregnant mothers and babies to search, compare, and buy milk products easily. Built with React.js, Vite.js, C#, and API Swagger, it uses MySQL and Firebase for data management, with secure JWT authentication. Deployed on Firebase and Azure, MomMilk ensures a seamless and reliable shopping experience."
              ghLink="https://github.com/hungitlor123/MomMilk88_FE"
              demoLink="https://suame88-f056d.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={HairSalon}
              title="HairSalonBooking Front-End Project"
              description="Our platform simplifies haircut bookings with personalized service and stylist options, customer reviews, secure payments, and staff management tools. Built with React.js, Vite.js, Node.js, and Express.js, it utilizes MySQL and PostgreSQL, secured with JWT, and is deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/HairSalonBooking/HairSalonBooking_FE"
              demoLink="https://hair-salon-vjp.azurewebsites.net/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Billiards}
              title="BilliardsManagement Back-End Project"
              description="This is a project for managing billiards. The project is built using C#, Entity Framework. I am coding this project. The project is still in the process of completion."
              ghLink="#"
              demoLink="https://github.com/hungitlor123/BilliardsFB88_BE_ProMax"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
