import React from "react";

const NewsItem=(props)=>  {
  
    let { title, description,imageUrl ,newsUrl,author,date} = props;//hume mila hai from news.js yeh humne yah destructing ki hai props k andar yeh sab hai usko destructure kiya hai
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {author?author:"unknown"} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
