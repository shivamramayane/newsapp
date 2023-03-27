import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source} = props;
  return (
     
      <div className="my-3" >
      <div className= "card" >
        <div
          style={{
            display: "flex",
            justifyCcontent: "flex-end",
            position: "absolute",
            right: "0",
          
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageurl
              ? "https://images.hindustantimes.com/img/2022/07/04/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1656978556864.jpeg"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? "unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="blank" className="btn btn-sm btn-dark">
            Ready more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
