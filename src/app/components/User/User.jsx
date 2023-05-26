import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, getUsers } from '../../../redux/actions/actionCreator';

import { Posts } from '../Postlist/Posts';

import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Card, Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export const User = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);
  const userPost = posts.filter((post) => post.userId === Number(id));

  useEffect(() => {
    if (!posts.length) {
      dispatch(getUserPosts(id));
    }
    dispatch(getUsers(id));
  }, [dispatch, id, posts.length]);

  return (
    <Container className="mt-3">
      <Card className="m-auto" border="info" style={{ width: '25rem' }}>
        <Card.Img
          style={{ width: '12rem' }}
          src="https://i.livelib.ru/auface/551253/o/fbe5/Leonid_Medvedovskij.jpg"
        />
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <b>username: </b>
              {user.username}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>name: </b>
              {user.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>email: </b>
              {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>phone: </b>
              {user.phone}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Link to="/">
        <Button>back to Main</Button>
      </Link>
      <ListGroup className="mt-3">
        {(!posts.length && (
          <Spinner
            as="span"
            animation="border"
            size="lg"
            variant="info"
          ></Spinner>
        )) ||
          userPost.map((post) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={post.id}
            >
              <Posts
                id={post.id}
                userId={id}
                title={post.title}
                body={post.body}
              />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};
