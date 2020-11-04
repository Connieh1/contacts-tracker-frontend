import React from 'react';
import InteractionForm from '../components/InteractionForm';
import Interactions from '../components/Interactions';

class InteractionsContainer extends React.Component {
  render() {
    return(
      <div>
        <InteractionForm contact={this.props.contact}/>
        <Interactions interactions={this.props.contact && this.props.contact.interactions}/>
      </div>
    );
  }
}


export default InteractionsContainer;
