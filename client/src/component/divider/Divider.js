import React from "react";
import "./Divider.css";

export default function Divider({ children1, children2,vertical=false}) {
  if (vertical){
    return( 
    <div className="divider_container">
      <div className="vertical-divider"/>
    </div>)
  }
  else return (
    <div className="divider_container">
      <span className="divider_content">
        {children1}
      </span>
      <div className="divider_border" />
      <span className="divider_content">
        {children2}
      </span>

    </div>
  );
};
