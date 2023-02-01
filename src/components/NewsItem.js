import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="my-4 ">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "80%", zIndex: "1" }}
        >
          {" "}
          {source}
        </span>
        <img
          src={
            !imageurl
              ? "https://dailyhodl.com/wp-content/uploads/2022/09/bitcoin-cleanest-industrial-use.jpg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Readmore
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
