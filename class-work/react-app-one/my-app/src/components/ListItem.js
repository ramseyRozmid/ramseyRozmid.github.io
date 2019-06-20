import React from 'react';

class ListItem extends React.Component {

  styles = {
    border: '3px solid blue'
  }

  render() {
    console.log(this.props)
    return (
    <div className="App">
      <h2>My List</h2>
      <p style={this.styles} key={ListItem.id}>{this.props.ListItem[0].name}</p>
    </div>
  )
  }
}

export default ListItem;
