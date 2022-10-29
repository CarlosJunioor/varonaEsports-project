import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import banner from "../assets/banner.png";
import { firestore } from "../config/firebase";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Events() {
  let { game } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  function setDate(startDate) {
    var date = new Date(startDate);
    date.setDate(date.getDate() + 1);
    return date.toDateString();
  }

  useEffect(() => {
    firestore
      .collection("events")
      .where("game", "==", game)
      .get()
      .then((querySnapshot) => {
        var eventsArray = [];
        querySnapshot.forEach((doc) => {
          eventsArray.push({ ...doc.data(), id: doc.id });
        });
        setEvents(eventsArray);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setLoading(false);
      });
  }, []);
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
        <img src={banner} width="200" />
      </div>
      <div className="select-game">
        <Container>
          {loading === true ? (
            <Loading />
          ) : (
            events && (
              <div className="section">
                <Row>
                  <h1 className="text-center">Team</h1>
                </Row>
                <Row>
                  {events.map((event) => (
                    <Col md="6">
                      <Card>
                        <CardImg
                          alt="Card image"
                          src={event.headerimage}
                          width="100%"
                        />
                        <CardBody>
                          <CardTitle tag="h5">{event.name}</CardTitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {event.game}
                          </CardSubtitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {setDate(event.start_date)}
                          </CardSubtitle>
                          <CardText>{event.eventoverview}</CardText>
                          <Link to={"/e/" + event.id}>
                            <Button>VIEW</Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Events;
