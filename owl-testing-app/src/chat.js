// import React from 'react'
// import ChatEvent from './ChatEvent'




// export default function Chat (props) {
//     const events = props.events.map((event, index) => 
//         <li key = {index}>
//             <ChatEvent
//                 type = {event.type}
//                 message = {event.message}
//                 timestamp = {event.timestamp}
//                 participant = {props.participants.find(
//                     participant => (participant.id === event.participantId
//                 )}  
//                 />
//          </li>
//     ));
//     return <ul className = 'chat'> {events} </ul>;
// }