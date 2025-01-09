import React from "react";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | Todos los Derechos Reservados.</h4>
      <div className="footerLinks">

      <a href="https://www.linkedin.com/in/alejandro-velloso-56674b2b8/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Alejand321" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/alejandro_vellozo" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:work.vellosoalejandro02@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;