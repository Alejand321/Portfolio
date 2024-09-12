import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../imagenes/IMG-20.jpg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Bienvenido!</h1>
          <h1>
            Soy <b>Alejandro Velloso</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              Sobre Mi
              <BsPerson />
            </button>
          </Link>

        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;