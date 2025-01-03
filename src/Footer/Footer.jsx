import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${style.bg}`}>
        <div className="container py-5">
          <div className="row text-white text-center py-5">
            <div className="col-md-4 mb-4">
              <h5 className="h2 mb-2">LOCATION</h5>
              <p className="mb-3">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="h2 mb-2">AROUND THE WEB </h5>
              <div
                className={`${style.iconsContainer} d-flex justify-content-center gap-4`}
              >
                <div
                  className={`${style.iconWrapper} facebook border border-1 border-white rounded-circle p-2`}
                >
                  <i className={`   fa-brands fa-facebook`}></i>
                </div>
                <div
                  className={`${style.iconWrapper} facebook border border-1 border-white rounded-circle p-2`}
                >
                  <i className={`   fa-brands fa-twitter`}></i>
                </div>
                <div
                  className={`${style.iconWrapper} facebook border border-1 border-white rounded-circle p-2`}
                >
                  <i className="fa-brands fa-linkedin"></i>{" "}
                </div>
                <div
                  className={`${style.iconWrapper} facebook border border-1 border-white rounded-circle p-2`}
                >
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <h5 className="h2 mb-2">ABOUT FREELANCER</h5>
            <p className="mb-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.copyWrites} py-4 text-center text-white`}>
          <p className="my-0">Copyright © Your Website 2021</p>
      </div>  
    </>
  );
}
