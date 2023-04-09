import React, { useState } from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import Navtopbar from "./Navtopbar";
import Data from "../Data";

const Dashboard = ({ item }) => {
  const [category, setCategory] = useState(Data);

  const filterItem = (curCategory) => {
    console.log("cliked");

    const updateCategory = Data.filter((newCategory) => {
      return newCategory.category === curCategory;
    });
    console.log(updateCategory);
    setCategory(updateCategory);
  };

  const filterTeam = (curTeam) => {
    console.log("cliked");

    const updateTeam = Data.filter((newTeam) => {
      return newTeam.team === curTeam;
    });
    console.log(updateTeam);
    setCategory(updateTeam);
  };

  return (
    <>
      <div className="Dashboard">
        <div className="d-flex flex-row">
          <div className="menu-tabs container ">
            <div className="btn " onClick={() => setCategory(Data)}>
              All
            </div>
            <div className="btn" onClick={() => filterItem("Live")}>
              LIVE
            </div>
            <div className="btn" onClick={() => filterItem("Draft")}>
              DRAFT
            </div>
            <div className="btn" onClick={() => filterItem("Archived")}>
              ARCHIVED
            </div>
          </div>

          <div className="dropdown" style={{marginRight:"50px"}}>
            <DropdownButton variant="secondary" title="Select Team">
              <Dropdown.Item className="dropdown" as="button" onClick={() => filterTeam("Sales")}>
                Sales
              </Dropdown.Item>
              <Dropdown.Item
              className="dropdown"
                as="button"
                onClick={() => filterTeam("Marketing")}
              >
                Marketing
              </Dropdown.Item>
              <Dropdown.Item
              className="dropdown"
                as="button"
                onClick={() => setCategory(Data)}
              >
                ALL
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <hr />

        <div className="dashboardstyle d-flex flex-wrap">
          {category.map((Val) => {
            return (
              <div className=" d-flex flex-wrap ">
                <div
                  className="dashCard card m-2  border border-dark"
                  style={{ width: "17rem" , cursor:"pointer"}}
                >
                  <img
                    src={Val.image}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    className="card-img-top "
                    alt="Card 1"
                  />
                  <div
                    style={{
                      position: "absolute",
                      background: "black",
                      opacity: "0.8",
                      color: "white",
                      padding: "0 5px",
                    }}
                  >
                    <i
                      style={{ fontSize: "12px" }}
                      className="fa-solid fa-circle"
                    ></i>{" "}
                    &nbsp;
                    {Val.category}
                  </div>

                  <Card.Body>
                    <div>
                      <b>{Val.name}</b>
                    </div>
                    <Card.Text> Last updated : &nbsp; {Val.date}</Card.Text>
                    <i className="fa-solid fa-clipboard-check"> &nbsp; </i>
                    <span>Lessons : {Val.lessons}</span> &nbsp;&nbsp; &nbsp;
                    &nbsp;
                    <i className="fa-regular fa-clock"> &nbsp; </i>
                    <span>Minutes : {Val.minutes}</span> &nbsp; &nbsp;
                    <button
                      style={{
                        backgroundColor: "#D8D8D8",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      {Val.team}
                    </button>
                  </Card.Body>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
