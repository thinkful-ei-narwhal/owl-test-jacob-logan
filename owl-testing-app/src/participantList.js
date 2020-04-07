import React from 'react';
import ReactDOM from 'react-dom'
import store from './store';

function ParticipantList(props) {
    const participantlist = props.participants.map((participants, key) => {
        <li key = {store.id}>
            <Participant 
                
            
            />
        </li>
    })

    return (
        <div className = 'participantList'>
            <li> { participantlist } </li>
        </div>

        
    );
}

export default {
    ParticipantList
}




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