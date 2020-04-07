import React from 'react'



export default function (props) {
  return (
    <div className="chat" key={props.id}>
      <img src={props.avatar} alt="" />
      <div className="details">
        <div className="participantName">{props.name}</div>
        <div className="status">
          {props.onStage ? "On Stage" : "In Session"}
        </div>
      </div>
    </div>
  );
}
