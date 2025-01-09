import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    InventarioDesc:
      "Inventario para una tienda de ropa, con la posibilidad de agregar, modificar y eliminar productos.",
    InventarioGithub: "https://github.com/Alejand321/Inventario",
    

    CafeteriaDesc:
      "Sitio web de una cafeteria, con la posibilidad de ver el menu, y realizar pedidos.",
    CafeteriaGithub: "https://github.com/Alejand321/Site-Coffee",

    TurneroDesc:
      "Aplicacion web para gestionar turnos de una clinica, con la posibilidad de ver los turnos disponibles y solicitar un turno.",
    TurneroGithub: "https://github.com/Alejand321/Turnos",

    CoffeDesc:
      "Sitio web para la realizacion de pedidos en una cafeteria, con la posibilidad de ver el menu.",
    CoffeGithub: "https://github.com/Alejand321/cafeteria",
  


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