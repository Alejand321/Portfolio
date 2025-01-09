import React from "react";
import Skills from "./Skills.jsx";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            <b>Hola!</b> 
          </h1>
          <p>
              Me llamo <b>Alejandro Velloso</b> soy un <b>Desarrollador Web Full Stack</b> y estudiante universitario cursando la carrera de <b>Ingenieria en Informatica</b>
             en la Universidad del Cono Sur de las Americas. <br />
            <br />
            He estudiado  Desarrollo Web Full Stack en la FPUNA donde he adquirido conocimientos y habilidades 
            sólidas en lenguajes de programación, bases de datos SQL y NoSQL y metodologias ágiles.
            <br />
            <br />Estoy comprometido con el aprendizaje continuo y la mejora constante, buscando 
            oportunidades para aplicar mis conocimientos y creatividad en proyectos innovadores.
            <br />
            
          </p>
          
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skills</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="NodeJS" />
        <Skills skill="Python" />
        <Skills skill="Django" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        
      </div>
    </>
  );
};

export default About;