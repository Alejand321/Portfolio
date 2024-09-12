import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import  { SiMongodb, SiPostgresql, SiDjango } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Postgres:<SiPostgresql /> ,
    MongoDB: <SiMongodb />,
    NodeJS: <FaNodeJs />,
    Python: <FaPython />,
    Django:  <SiDjango />,
    Docker: <FaDocker />,
    Bootstrap: <FaBootstrap />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;