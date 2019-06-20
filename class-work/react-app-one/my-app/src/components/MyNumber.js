import React from 'react';

class MyNumber extends React.Component {
  render(props) {
    return (
    <div className="App">
      <h2>My number: {this.props.myNum}</h2>
    </div>
  )
  }
}

export default MyNumber;
