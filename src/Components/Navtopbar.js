import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Navtopbar = () => {
  return (
    <Navbar className="Navtopbar">
      <Container>
        <Navbar.Brand className="navName">KNOWLEDGE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <button
          className="navBtn"
            style={{
              border: "2px solid black",
              backgroundColor: "#39B5E0",
              color: "white"
            }}
          >
            CREATE COURSE
          </button>

          <img
          className="navImg"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              marginLeft:"20px"
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKwO_x9oNJHxPJXrQ_SBdVIkCOoPkceRTJw&usqp=CAU"
          />
          <i style={{marginLeft:"10px"}} className="fa-solid fa-bars" ></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navtopbar;
