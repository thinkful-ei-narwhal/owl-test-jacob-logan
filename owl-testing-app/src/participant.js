// create function to write the elements for each participant 
// get the data from participants list and store it to each participant 
import React from 'react';
import ReactDOM from 'react-dom'
import store from './store';
import ParticipantList from './participantList'

function Participant(props) {
    const participantlist = store.participants.map(participants =>

         <Participant key={participants.id} name = {participants.name}
          inSession = {participants.inSession} onStage = {participants.onStage}/>
     );


    return (
        <div className = 'participantList'>
            <li> { participantlist } </li>
        </div>

        
    );
}

export default {
    Participant
}