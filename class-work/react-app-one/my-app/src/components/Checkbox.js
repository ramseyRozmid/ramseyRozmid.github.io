import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <form>
        <label>
            <input type="checkbox"/> Only show products in stock
        </label>
      </form>
  )
  }
}

export default Checkbox;
