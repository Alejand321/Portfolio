import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../imagenes/p01.jpg";
import InvImage from "../imagenes/p02.jpg";
import TurImage from "../imagenes/p03.jpg";
import CafemImage from "../imagenes/p04.jpg";


const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
      Proyectos 
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={InvImage} projectName="Inventario" />
        <ProjectBox projectPhoto={FilmImage} projectName="Coffe" />
        <ProjectBox projectPhoto={TurImage} projectName="Turnero" />
        <ProjectBox projectPhoto={CafemImage} projectName="Cafeteria" />
      </div>
    </div>
  );
};

export default Projects;