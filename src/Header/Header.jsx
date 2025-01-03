import React from "react";
import style from "./header.module.css";
export default function Header({ text, color }) {
  return (
    <>
      <div className="text-center mb-3">
        <h1 className={`text-uppercase fw-bold ${color} ${color == 'text-dark' ? 'mt-4' : null}`} >{text}</h1>
      </div>
      <div className={`${color == 'text-white' ? style.star : style.starDark} text-center position-relative mb-3`}>
        <i class={`fa-solid fa-star ${color}`} ></i>
      </div>
    </>
  );
}
