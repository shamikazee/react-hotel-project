import React from "react";
import { Link } from "react-router-dom";
function Room({ room }) {
  const { name, slug, price, images } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;
