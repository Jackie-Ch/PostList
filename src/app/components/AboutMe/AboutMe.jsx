import ListGroup from "react-bootstrap/ListGroup";
import { Card, Container } from "react-bootstrap";
import avaImage from "../../../image/avaCircle.jpg";

export const AboutMe = () => {
  return (
    <Container>
      <Card border="info" style={{ width: "25rem", margin: "3rem auto 1rem" }}>
        <Card.Img
          style={{ width: "12rem", margin: "1rem auto" }}
          src={avaImage}
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
      <p>
        На протяжении двух лет я изучаю web-разработку. Прошел обучение в школе
        Result School и учусь в Rolling scopes school. Изучил Html, Css,
        Javascript, React, Redux/RTK, Git. Знаком с Typescript, NodeJS, Express,
        Long polling базами данных типа SQL, NoSQL и отправкой запросов через
        Axios. Cамостоятельно делаю проекты на React. <br />
        https://github.com/Jackie-Ch
      </p>
    </Container>
  );
};
