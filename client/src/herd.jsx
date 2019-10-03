import React from 'react';


const Herd = (props) => (
  <div>
    <h4>The Herd</h4>
    <ol>{props.cows.map((cow) => <li key={cow.id}>{cow.cowname}</li>)}
    </ol>
  </div>
)

export default Herd;