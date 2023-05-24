import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../redux/actions/actionCreator";

import Pagination from "react-bootstrap/Pagination";

export const PaginationComponent = () => {
  const [active, setActive] = useState(1);
  const [items] = useState([0, 20, 40, 60, 80]);

  const dispatch = useDispatch();

  const handlePaginationClick = (pageNumber, activePageNumber) => {
    dispatch(getPosts(pageNumber));
    setActive(activePageNumber + 1);
  };

  return (
    <div>
      <Pagination>
        {items.map((pageNumber, index) => (
          <Pagination.Item
            key={pageNumber}
            active={index + 1 === active}
            onClick={() => handlePaginationClick(pageNumber, index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
