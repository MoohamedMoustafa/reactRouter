import React, { useState } from "react";
import style from "./portfolio.module.css";
import pngOne from "../assets/1.png";
import pngTwo from "../assets/2.png";
import pngThree from "../assets/3.png";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";

export default function Portofolio() {
  // const [modal, setModal] = useState(<></>);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [pngOne, pngTwo, pngThree, pngOne, pngTwo, pngThree];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-white mb-5 mt-4 ">
        <div className="container min-vh-100">
          <Header text='portfolio component' color='text-dark'/>
          <div className="row mt-1 g-5">
            {images.map((image, index) => (
              <div
                className="col-md-4 col-sm-6"
                key={index}
                onClick={() => openModal(image)}
              >
                <div className="item rounded-3 overflow-hidden position-relative">
                  <img src={image} alt="" className="w-100" />
                  <div
                    className={`${style.layer} d-flex justify-content-center align-items-center`}
                  >
                    <i
                      className={`fa-solid fa-plus text-white ${style.iconFont}`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {modal} */}
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </>
  );
}
