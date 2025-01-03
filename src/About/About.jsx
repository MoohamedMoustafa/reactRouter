import React from "react";
import style from "./about.module.css";
import Header from "../Header/Header";
export default function About() {
  return (
    <>
      <div className={`${style.bg} `}>
        <div className="container">
          <div
            className={`row flex-column justify-content-center align-items-center ${style.height}`}
          >
            <Header text="About Component" color='text-white'/>
            <div className="text-container row justify-content-center align-items-center text-white gap-4">
              <p className=" col-md-5 px-2">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className=" col-md-5 px-2">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
