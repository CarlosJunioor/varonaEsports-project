import React from "react";
import discord_cta from "../assets/banner.png";
import { Button, Container } from "reactstrap";

import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#121212",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "40px 0px",
        }}
      >
        <Container>
          <center>
            <img src={discord_cta} width="400" style={{ maxWidth: "100%" }} />

            <p style={{ textAlign: "center", color: "#fff" }}>
              Our discord community!
            </p>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#121212",
                padding: "10px 40px",
              }}
              size="md"
              href="https://discord.gg/sbaQEjvp9d"
              target="_blank"
            >
              Join our Discord
            </Button>
          </center>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "40px 0px",
        }}
      >
        <a href="https://twitter.com/EsportsVarona" cursor="pointer" target="_blank"><img src={twitter} alt="Twitter Logo"/> </a>
        <a href="https://www.instagram.com/varonaesports/" cursor="pointer" target="_blank"> <img src={instagram} alt="Instagram Logo"/> </a>
        
      </div>
      <div style={{ backgroundColor: "#000", padding: "40px 0px" }}>
        <Container
          className="copyright"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ textAlign: "center", color: "#fff", margin: "0" }}>
            &copy; 2020 Varona eSports Inc. All Rights Reserved
          </p>
          <p style={{ textAlign: "center", color: "#fff", margin: "0" }}>
            Terms Of Service
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
