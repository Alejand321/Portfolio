import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LevelsDesc:
      ".",
    LevelsGithub: "https://github.com/Alejand321/TURNERO",
    

    MovieDesc:
      "",
    MovieGithub: "https://github.com/Alejand321/CAFETRERIA",
  


  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>


      </div>
    </div>
  );
};
export default ProjectBox;