import React, { useState } from "react";

import "./infoUser.css";
import Card from "../UI/Card.js";
import ErrorUser from "../Handlers/ErrorUser.js";

let nextId = 0;

const InfoUser = (props) => {
  const usernameChange = (event) => {
    event.preventDefault();
    props.setUserProp(event.target.value);
    props.booleanProp("");
  };

  const ageChange = (event) => {
    event.preventDefault();
    props.setAgeProp(event.target.value);
    props.booleanProp("");
  };

  const booleanHandler = (event) => {
    if (
      props.user.length < 4 ||
      props.user.length > 12 ||
      props.age.length > 3 ||
      props.age.length < 1 ||
      props.dataUser.includes(props.user) ||
      parseInt(props.age) < 18 ||
      parseInt(props.age) > 100
    ) {
      props.booleanProp(false);
    } else {
      props.setDataProp({ user: props.user, age: props.age, id: ++nextId });
      props.setDataUserProp(props.user);
      props.booleanProp(true);
    }
  };

  const eventKeyHandler = (event) => {
    if (event.key === "Enter") {
      return booleanHandler();
    }
  };

  return (
    <Card>
      {props.bool === false ? (
        <ErrorUser
          user={props.user}
          age={props.age}
          booleanProp={props.booleanProp}
          dataUser={props.dataUser}
        />
      ) : (
        ""
      )}
      <h1 className="h1">Enter your username Info:</h1>
      <input
        type="text"
        name="Username..."
        className="input"
        placeholder="user"
        onChange={usernameChange}
        onKeyDown={eventKeyHandler}
      ></input>
      <h1 className="h1">Enter your Age Info:</h1>
      <input
        type="number"
        name="Age"
        className="input"
        placeholder="age"
        onChange={ageChange}
        onKeyDown={eventKeyHandler}
      ></input>
      <button type="submit" className="button" onClick={booleanHandler}>
        Enviar
      </button>
    </Card>
  );
};

export default InfoUser;
