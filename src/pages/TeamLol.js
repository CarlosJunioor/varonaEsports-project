import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "reactstrap";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner-aboutus.png";

function TeamLol() {
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
          <img
            src={banner2}
            style={{
              display: "block",
              width: "100%",
              justifyContent: "center",
            }}
          />
          <div className="section">
            <Row>
              <h3 style={{ fontWeight: "800" }}></h3>
            </Row>
            <Row>
              <h4 style={{ textAlign: "center", fontWeight: "800" }}>
                League of Legends Roster
              </h4>
            </Row>

            <div class="card-group">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Player 1</h4>
                  <p class="card-text">Posição XXX</p>
                  <a href="#" class="btn btn-primary">
                    Check Details
                  </a>
                </div>
              </div>

              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Player 1</h4>
                  <p class="card-text">Posição XXX</p>
                  <a href="#" class="btn btn-primary">
                    Check Details
                  </a>
                </div>
              </div>

              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Player 1</h4>
                  <p class="card-text">Posição XXX</p>
                  <a href="#" class="btn btn-primary">
                    Check Details
                  </a>
                </div>
              </div>

              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Player 1</h4>
                  <p class="card-text">Posição XXX</p>
                  <a href="#" class="btn btn-primary">
                    Check Details
                  </a>
                </div>
              </div>

              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Player 1</h4>
                  <p class="card-text">Posição XXX</p>
                  <a href="#" class="btn btn-primary">
                    Check Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h4 style={{ textAlign: "center", fontWeight: "800" }}>
            Coach / STAFF
          </h4>

          <div class="card-group">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">Player 1</h4>
                <p class="card-text">Posição XXX</p>
                <a href="#" class="btn btn-primary">
                  Check Details
                </a>
              </div>
            </div>

            <div class="card">
              <img
                class="card-img-top"
                src="https://www.procam.in/static-assets/images/cssimages/team/default-member.png"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">Player 1</h4>
                <p class="card-text">Posição XXX</p>
                <a href="#" class="btn btn-primary">
                  Check Details
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default TeamLol;
