/* The challenge

You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

Then write a unite function that changes this state to true.

Then conditionally render a bespoke message in the component.

If the States are united then display "Code for everyone"

If the States aren't united then display "Make America code again"
*/
import React from 'react';

export class States extends React.Component {
  constructor() {
    super();
    this.state = { united: false };
    this.unite = this.unite.bind(this);
  }
  unite(){
    this.setState({ united: true });
  }
  render() {
    return (
      <div className="status">
        {this.state.united ? 'Code for everyone' : 'Make America code again'}
      </ div>
    )
  } 
}