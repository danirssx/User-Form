import React, { useState } from "react";

import "./UI/Card.css";
import Top from "./UI/top.js";
import "./UI/top.css";
import InfoUser from "./users/InfoUser.js";
import LogUser from "./users/logUser";

function App() {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [boolean, setBoolean] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [dataUser, setdataUser] = useState([]);

  const setDataHandler = (value) => {
    setData([...data, { value }]);
  };

  const setDataUserHandler = (value) => {
    setdataUser([...dataUser, value]);
  };

  const setMessageHandler = (value) => {
    setMessage(value);
  };

  const userHandler = (value) => {
    setUser(value);
  };

  const ageHandler = (value) => {
    setAge(value);
  };

  const booleanHandler = (value) => {
    setBoolean(value);
  };

  return (
    <div>
      <Top />
      <InfoUser
        setUserProp={userHandler}
        setAgeProp={ageHandler}
        booleanProp={booleanHandler}
        setDataProp={setDataHandler}
        setDataUserProp={setDataUserHandler}
        user={user}
        dataUser={dataUser}
        age={age}
        dataGrab={data}
        bool={boolean}
      />
      {data.length > 0 ? (
        <LogUser
          setMessageProp={setMessageHandler}
          setDataProp={setDataHandler}
          user={user}
          age={age}
          dataGrab={data}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
