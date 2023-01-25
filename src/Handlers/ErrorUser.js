import React from "react";

import ErrorCard from "../UI/ErrorCard.js";
import "../UI/ErrorCard.css";

function ErrorUser(props) {
  const listErrors = {
    age: "You must have at least 18 years to sign in.",
    username: "Introduce a valid Username (4 > Characters < 12)",
    ageGap: "Introduce a valid age (18 > Age < 100)",
    sameUser: "This username already exists.",
  };

  const quitHandler = () => {
    props.booleanProp("");
  };

  const errorHandler = () => {
    if (props.user.length < 4 || props.user.length > 12) {
      return listErrors.username;
    }

    if (props.age.length > 3 || props.age.length < 1) {
      return listErrors.ageGap;
    }

    if (parseInt(props.age) < 18 || parseInt(props.age) > 100) {
      return listErrors.age;
    }

    if (props.dataUser.includes(props.user)) {
      return listErrors.sameUser;
    }
  };

  return (
    <ErrorCard>
      <h1 className="h1Error">!Warning!</h1>
      <p className="pError">{errorHandler()}</p>
      <div className="action">
        <button className="button" onClick={quitHandler}>
          Okay
        </button>
      </div>
    </ErrorCard>
  );
}

export default ErrorUser;
