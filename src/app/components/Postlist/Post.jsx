import { Link } from 'react-router-dom';

export const Post = ({ userId, title, body }) => {
  return (
    <>
      <Link to={`/postlist-n/users/${userId}`}>
        <img
          src="https://i.livelib.ru/auface/551253/o/fbe5/Leonid_Medvedovskij.jpg"
          className="rounded-circle"
          height="50"
          alt="Avatar"
          loading="lazy"
        />
      </Link>

      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {body}
      </div>
    </>
  );
};
