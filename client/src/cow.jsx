import React from 'react';

// database sends data from post request and creates a new list (child) to herd with the cow's name.

class Cow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li onClick={ handleClick }>{this.props.cow.cowname}</li>
    );
  };
}

export default Cow;