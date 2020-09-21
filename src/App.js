import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/contacts')
    .then(resp => resp.json())
    .then(responseData => console.log(responseData))
}



  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
