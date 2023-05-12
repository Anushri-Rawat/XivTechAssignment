import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-reveal" data-aos="fade-up">
      <div className="row">
        <div className="col-md-6">
          <div className="card-description">
            <h2 className="card-title mb-0">{data.title}</h2>
            <div className="d-block d-md-none">
              <img src={data.img} alt="card-img" className="card-img" />
            </div>
            <p className="card-content">{data.content}</p>
            <a href={data.link} className="card-link">
              <p>{data.linkName}</p>
              <i
                className="bi bi-arrow-right"
                style={{
                  width: "25px",
                  marginLeft: "20px",
                }}
              ></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex">
          <img src={data.img} alt="card-img" className="card-img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
