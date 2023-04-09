import React from "react";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div>
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9i86ZDyFmHI22Xc6tRdijChfuycBxVde-tQgU2miz8dfJupzGeeQiaErdS-rnbm59uD4&usqp=CAU"
          />
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="rows">
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
                </div>
              </li>
            );
          })}
        </div>
        <div style={{marginTop:"250px"}}>
          <li className="row">
            <div className="rows">
              <div id="icon">
                <i className="fa-solid fa-gear"></i>
              </div>{" "}
              <div id="title">SETTINGS</div>
            </div>
            <div className="rows">
              <div id="icon">
              <i className="fa-solid fa-building"></i>
              </div>{" "}
              <div id="title">COMPANY</div>
            </div>
            <div className="rows">
              <div id="icon">
              <i className="fa-solid fa-circle-user"></i>
              </div>{" "}
              <div id="title">MY PROFILE</div>
            </div>
            <hr style={{ color: "white" }} />
            <div className="powered">
              <b>Powerd By </b> @ TeamJeenyus
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
