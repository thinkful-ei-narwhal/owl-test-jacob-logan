import React from "react";
// import "./styles.css";
// import Comp1 from "./Comp1";
// import { Comp2 } from "./Comp1";
// import abc from "./data";
import './App.css';
import Party from "./Part";
import Stage from "./Stage";
import Chat from "./Chat";



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

  let chatComponents = props.data.chatEvents.map(val => (
    <Chat
      key={val.participantId}
      type={val.type}
      message ={val.message}
      time={val.time}
      timestamp = {val.timestamp}
    />
  ))

    let chatID = 0;
    for (let i = 0; i < props.data.participants.length; i++) {
      console.log(props.data.participants[i])

        // if(props.data.participants[i] === props.data.chatEvents) {
        //   console.log(chatID)
        //   chatID = props.data.participants[i]
        }


   console.log(chatID)


  return (
    <div className="App">

      <div className="chatCSS" >{chatComponents}</div>
      <div className="partyCSS" >{components}</div>
      <div className="stageCSS">{stageComponents}</div>
      
    </div>
  );

}