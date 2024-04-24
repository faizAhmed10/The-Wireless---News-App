import React from "react";

const NewsItem = (props) =>{

    let { title, description, imgsrc, newsurl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "89%", zIndex: "1"}}>
            {source}
          </span>
          <img
            src={
              !imgsrc
                ? "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                : imgsrc
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author},{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
