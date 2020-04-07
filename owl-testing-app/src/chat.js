import React from 'react'
import './chat.css'


const Chat = function (props) {
  return (
    <div className="chat" key={props.participantId}>
      <div className="details">
        <div className = 'findName'> {props.name} </div>
        <div className="type">{props.type}</div>
        <div className="message"> {props.message} </div>
        <div className = 'time' style={{ display: (props.type === 'message' ? 'flex' : 'none') }}> {Date(props.time)} </div>
        <div className = 'timeStamp' style={{ display: 'none' }}> {Date(props.timestamp)} </div>
      </div>
    </div>
  );
}


export default Chat;