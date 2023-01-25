import React from "react";

import "./Card.css";

function Card({ children }) {
  return (
    <section className="box">
      <div className="card">{children}</div>
    </section>
  );
}

export default Card;
