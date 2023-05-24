import { Comments } from "../Comments/Comments";
import { Post } from "./Post";

import ListGroup from "react-bootstrap/ListGroup";

export const Posts = ({ id, userId, title, body }) => {
  return (
    <ListGroup as="ol" className="mt-4">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <Post key={id} userId={userId} title={title} body={body} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Comments id={id} userId={userId} />
      </ListGroup.Item>
    </ListGroup>
  );
};
