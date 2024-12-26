import React from 'react';
import { useTranslation } from "react-i18next";
import '../../styles/Card.css'; 

function Card({image, title, text, href}){
 
  const { t } = useTranslation('Home');

  return (
   <div className="card card-hover">
     <img src={image} className="card-img-top card-img" alt="..." />
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{text}</p>
         {href ? 
               <a href={href} className="btn btn-primary">{t("visit")}</a>
           : null}
      </div>
   </div>
  );  
};
export default Card;
