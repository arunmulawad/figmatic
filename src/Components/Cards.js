import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = ({ item }) => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {item.map((Val) => {
          return (
            <div className="d-flex flex-wrap">
              {/* Card 1 */}
              <div className="card m-2" style={{ width: "20rem" }}>
                <img
                  src={Val.image}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  className="card-img-top "
                  alt="Card 1"
                />
                <div style={{position:"absolute" }}>
                  <i className="fa-solid fa-circle"></i>
                  {Val.category}
                </div>

                <Card.Body>
                  <div>{Val.name}</div>
                  <Card.Text> Last updated : &nbsp; {Val.date}</Card.Text>
                  <i class="fa-solid fa-clipboard-check"> &nbsp; </i>
                  <span>Lessons : {Val.lessons}</span> &nbsp;&nbsp; &nbsp;
                  &nbsp;
                  <i className="fa-regular fa-clock"> &nbsp; </i>
                  <span>Minutes : {Val.minutes}</span>
  
                  <Button style={{ backgroundColor: "grey" ,}}>
                    {Val.course}
                  </Button>
                </Card.Body>
              </div>
            </div>
          );
        })}
      </div>

      {/*  <div className="d-flex flex-wrap">
        <div className="row justify-content-centre">
          {item.map((Val) => {
            return (
              <div className="container-fluid ">
                <Card style={{ width: "18rem"}}>
                  <div className="card-img-top text-center">
                    <img
                      src={Val.image}
                      alt={Val.name}
                      className="photo w-100"
                    />
                    <div><i class="fa-solid fa-circle"></i>{Val.category}</div>
                  </div>
                  <Card.Body>
                    <Card.Title>{Val.name}</Card.Title>
                    <Card.Text> Last updated : &nbsp; {Val.date}</Card.Text>
                    <i class="fa-solid fa-clipboard-check"> &nbsp; </i>
                    <span>Lessons : {Val.lessons}</span> &nbsp;&nbsp; &nbsp;
                    &nbsp;
                    <i className="fa-regular fa-clock"> &nbsp; </i>
                    <span>Minutes : {Val.minutes}</span>
                    <Button style={{backgroundColor:"grey" , paddingTop:"0 0 0 0"}}>{Val.course}</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default Cards;
