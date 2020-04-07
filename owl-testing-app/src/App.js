import React from "react";
// import "./styles.css";
// import Comp1 from "./Comp1";
// import { Comp2 } from "./Comp1";
// import abc from "./data";
import Party from "./Part";
// console.log(obj);

export default function App(props) {
  // console.log(props.data);
  return (
    <div className="App">
      {props.data.participants.map(val => (
        <Party
          key={val.id}
          avatar={val.avatar}
          name={val.name}
          onStage={val.onStage}
        />
      ))}
    </div>
  );
}
