import { useSelector, useDispatch } from 'react-redux';
import {
  getComments,
  setLoaderComments,
} from '../../../redux/actions/actionCreator';

import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      style={{
        borderRadius: '0.3rem',
      }}
    >
      {children}
    </button>
  );
}

export const Comments = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const isLoaderComments = useSelector(
    (state) => state.loader.isLoaderComments
  );

  const handleComments = () => {
    if (!comments.length) {
      setTimeout(() => {
        dispatch(getComments(id));
        dispatch(setLoaderComments(false));
      }, 1000);
    }
  };

  return (
    <Accordion>
      <Card>
        <Card.Header onClick={handleComments}>
          <CustomToggle eventKey="1">Commets</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {(isLoaderComments && (
              <Spinner
                variant="info"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )) ||
              comments.map((comment) => (
                <ListGroup as="ol" key={comment.id}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start bg-info"
                  >
                    {comment.email}
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start mb-3"
                  >
                    {comment.body}
                  </ListGroup.Item>
                </ListGroup>
              ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
