import React from 'react'
import style from "./modal.module.css";
export default function Modal({image, closeModal}) {
  return (
    <>
        <div className={`${style.modal} d-flex justify-content-center align-items-center`}
            onClick={closeModal}>
            <div className={`${style.modalContent}`} 
            onClick={(e) => e.stopPropagation()}>
                <img src={image} alt=""  className='w-100'/>
            </div>
        </div>
    </>
  )
}
