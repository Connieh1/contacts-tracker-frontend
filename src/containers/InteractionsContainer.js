import React from 'react';
import InteractionsForm from '../components/InteractionsForm';
import Interactions from '../components/Interactions';

class InteractionsContainer extends React.Component {
  render() {
    return(
      <div>
        <InteractionsForm/>
        <Interactions interactions={this.props.contact && this.props.contact.interactions}/>
      </div>
    );
  }
}


export default InteractionsContainer;
