import ListGroup from "react-bootstrap/ListGroup";
import { Card, Container } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <Container>
      <Card border="info" style={{ width: "25rem", margin: "3rem auto" }}>
        <Card.Img
          style={{ width: "12rem", margin: "0 auto" }}
          src="https://i.livelib.ru/auface/551253/o/fbe5/Leonid_Medvedovskij.jpg"
        />
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <b>name: </b>Maxim Avvakumov
            </ListGroup.Item>
            <ListGroup.Item>
              <b>email: </b>reamonn8@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              <b>phone: </b>+79041655752
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};
