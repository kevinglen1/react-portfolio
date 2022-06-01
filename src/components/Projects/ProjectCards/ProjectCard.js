import React from "react";
import './ProjectCard.css'

export default function ProjectCard(props) {
   return (
  <div className="card" style={{minHeight: '27rem'}}>
    <img src={ props.imgPath } className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{ props.title }</h5>
      <p className="card-text"> { props.description }</p>
      <a href={ props.link } className="btn btn-primary">Open Code</a>
    </div>
  </div>
   )
}