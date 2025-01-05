import React from "react";
import style from "./home.module.css";
import avatar from "../assets/avatar.svg";
import Header from "../Header/Header";

export default function Home() {
  
  return (
    <>
      <div className={` ${style.homebg}`}>
        <div className="container">
          <div className="row flex-column justify-content-center align-items-center min-vh-100 ">
            <div className="col-md-3 mb-3">
              <div className="image-wrapper">
                <img className="w-100 mb-2" src={avatar} alt="" />
              </div>
            </div>
            <Header text="Start Framework"  color='text-white'/>
            <p className="text-center text-white">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
