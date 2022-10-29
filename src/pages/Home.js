import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "reactstrap";
import banner from "../assets/banner.png";
import valorant from "../assets/valorant.jpg";
import league from "../assets/league.jpg";
import wildrift from "../assets/wildrift.jpg";
import { useHistory, Link } from "react-router-dom";
import event from "../assets/event.jpg";
import video from "../assets/video.mp4";

import HomeCarousel from '../pages/Carousel/HomeCarousel'
import HomeCarousel2 from '../pages/Carousel/HomeCarousel2'

function Home() {

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

      <div style={{ backgroundColor: "#000" }}>
        <Container>
          <div className="section">
            <Row>
              <h1 style={{ fontWeight: "800", color: "#FFF", textAlign: "center"}}>
                NEWS
              </h1>
              <HomeCarousel2 />
            </Row>
          </div>
        </Container>
      </div>

      <div className="select-game">
        <Container>
          <div className="section">
            <Row>
              <h3 style={{ fontWeight: "800" }}></h3>
            </Row>
            <Row>
              <h1 style={{ textAlign: "center", fontWeight: "800" }}>
                Check our Teams
              </h1>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/TeamVal" style={{ width: "auto" }}>
                <img
                  src={valorant}
                  className="game-cover"
                  alt="Valorant Cover Art"
                />
              </Link>
              <Link to="/TeamLol" style={{ width: "auto" }}>
                <img
                  src={league}
                  className="game-cover"
                  alt="League Cover Art"
                />
              </Link>
              <Link to="/TeamWild" style={{ width: "auto" }}>
                <img
                  src={wildrift}
                  className="game-cover"
                  alt="Apex Legends Cover Art"
                />
              </Link>
            </Row>
          </div>
        </Container>
      </div>
      <div style={{ backgroundColor: "#000" }}>
        <Container>
          <div className="section">
            <Row>
              <h1 style={{ fontWeight: "800", color: "#FFF", textAlign: "center" }}>
                SHIRTS !
              </h1>
              <video controls loop autoPlay muted>
                <source src={video} type="video/mp4" />
              </video>
            </Row>
          </div>
        </Container>
      </div>

      <div className='select-game fs-1 fw-bold text-center'>Patrocinadores</div>
        <HomeCarousel /> 
      <Footer />
    </>
  );
}

export default Home;
