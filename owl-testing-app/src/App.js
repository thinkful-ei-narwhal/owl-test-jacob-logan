import React from "react";
// import "./styles.css";
// import Comp1 from "./Comp1";
// import { Comp2 } from "./Comp1";
// import abc from "./data";
import './App.css';
import Party from "./Part";
import Stage from "./Stage";
import Chat from "./Chat";
// console.log(obj);

export default function App(props) {
  // console.log(props.data);
  const components = props.data.participants.map(val => (
    <Party
      key={val.id}
      avatar={val.avatar}
      name={val.name}
      onStage={val.onStage}
    />
  ))
  const stageComponents = props.data.participants.map(val => (
    <Stage
      key={val.id}
      avatar={val.avatar}
      name={val.name}
      onStage={val.onStage}
    />
  ))
  const chatComponents = props.data.participants.map(val => (
    <Chat
      key={val.id}
      avatar={val.avatar}
      name={val.name}
      onStage={val.onStage}
    />
  ))
  return (
    <div className="App">
      <div className="partyCSS">{components}</div>
      <div className="stageCSS">{stageComponents}</div>
      <div className="chatCSS">{chatComponents}</div>
    </div>
  );

}