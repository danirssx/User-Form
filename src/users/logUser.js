import React, { useState } from "react";

import "./infoUser.css";
import "../UI/Card.js";
import Card from "../UI/Card.js";

function LogUser({ dataGrab }) {
  return (
    <div>
      {dataGrab.map((datas) => {
        return (
          <Card key={datas.value.id}>
            <p key={datas.value.id} className="h1">
              Soy @{datas.value.user} y tengo {datas.value.age} años.
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export default LogUser;
