import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../imagenes/IMG-21.jpg";
import GymImage from "../imagenes/IMG-22.jpg";


const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
      Mis <b>Proyectos</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
      </div>
    </div>
  );
};

export default Projects;