import React from "react";

import "./Card.css";

function ErrorCard({ children }) {
  return (
    <div className="back">
      <label className="errorCard">{children}</label>
    </div>
  );
}

export default ErrorCard;
