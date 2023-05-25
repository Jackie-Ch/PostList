import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, setLoaderPost } from '../../../redux/actions/actionCreator';

import { Posts } from './Posts';
import { PaginationComponent } from '../Pagination/Pagination';

import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';

export const Postlist = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts.posts);
  const isLoaderPosts = useSelector((state) => state.loader.isLoaderPosts);

  useEffect(() => {
    if (!posts.length) {
      dispatch(setLoaderPost(true));
      setTimeout(() => {
        dispatch(getPosts());
        dispatch(setLoaderPost(false));
      }, 500);
    }
  }, [dispatch, posts.length]);

  return (
    <>
      <Container>
        <h3 style={{ textAlign: 'center' }}>Post list</h3>
        <PaginationComponent />
        {(isLoaderPosts && (
          <Spinner
            variant="info"
            as="span"
            animation="border"
            size="lg"
          ></Spinner>
        )) ||
          posts.map((post) => (
            <Posts
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
      </Container>
    </>
  );
};
