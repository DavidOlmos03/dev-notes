import React from 'react';
import '../../styles/Card.css'; 

function Card({image, title, text, href}){
  return (
   <div className="card card-hover">
     <img src={image} className="card-img-top card-img" alt="..." />
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{text}</p>
         <a href={href} className="btn btn-primary">Go somewhere</a>
      </div>
   </div>
  );  
};
export default Card;
