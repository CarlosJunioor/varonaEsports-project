import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "reactstrap";
import banner from "../assets/banner.png";

function Home() {

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#000",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={banner} width="200" alt="Varona Esports Gaming" />
      </div>

      <div className="select-game">
        <Container>
          <div className="section">
            <Row>
              <h3 style={{ fontWeight: "800" }}></h3>
            </Row>
            <Row>
              <h4 style={{ textAlign: "center", fontWeight: "800" }}>
                Contact Us
              </h4>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="container mt-5">
      <h2 className="mb-3">Send us an E-mail</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
            </Row>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Home;
