import React from "react";
import './ProjectCard.css'

export default function ProjectCard(props) {
   return (
  <div className="card" style={{minHeight: '34rem'}}>
    <div className="card-image">
    <img src={ props.imgPath } className="card-img-top card-img" alt="..."/>
    </div>
    <div className="card-body">
      <h5 className="card-title">{ props.title }</h5>
      <p className="card-text"> { props.description }</p>
      <a href={ props.link } className="btn btn-primary card-btn">Open Code</a>
    </div>
  </div>
   )
}