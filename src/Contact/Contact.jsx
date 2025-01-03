import React from "react";
import style from "./contact.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Header from './../Header/Header';
export default function Contact() {
  return (
    <>
      <div className="container min-vh-100">
        <Header text='contact component' color='text-dark' />
        <div className="row">
          <form action="">
            <div className="form-container col-md-8 m-auto mt-3">
              <FloatingLabel
                controlId="floatingInput"
                label="userName"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="userAge"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="userEmail"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="userPassword"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="name@example.com" />
              </FloatingLabel>
              <button className="btn btn-success btn-lg mt-1"
              onClick={(e) => {e.preventDefault()}}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
