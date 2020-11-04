import React from 'react';
import {connect} from 'react-redux';
import {deleteInteraction} from '../actions/deleteInteraction';

const Interactions = (props) => {

const handleDelete = (interaction) => {
  props.deleteInteraction(interaction.id, interaction.contact_id)
}

  return(
    <div>
      {props.interactions && props.interactions.map(interaction =>
        <li key={interaction.id}>{interaction.date}<br/> {interaction.description}<br/> {interaction.notes} <button onClick={() => handleDelete(interaction)}>Delete</button><br/></li>
      )}
    </div>
  );
}


export default connect(null, {deleteInteraction})(Interactions);
