import React from "react";
import { useNavigate } from "react-router-dom";
import { GithubLogo , FigmaLogo } from "phosphor-react";

function ProjectItem({ image, name, id,github , figma }) {
  /*const navigate = useNavigate();*/

  const hover =()=>{
    
  }
  return (
    <div
      className="projectItem"
      onMouseEnter={hover}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div className="projecttext"> 
        <div className="projectname">
          {name}
        </div> 
        <div className="plogos">
          <a href={github}><GithubLogo size={23} /></a>
          <a href={figma}><FigmaLogo size={23} /></a>
        </div>
      </div>

    </div>
  );
}

export default ProjectItem;