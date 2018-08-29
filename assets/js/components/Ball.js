import React, { Component } from 'react'

function logAllMethods(obj) {
  if (null === obj) return;
  console.log(Object.getOwnPropertyNames(obj));
  logAllMethods(Object.getPrototypeOf(obj));
}

export default class Ball extends Component{
  constructor(){
    super();
    this.state = {
      dono: 'fuk',
      sprawdz: 'sobie'
    }
  }
  s(e){
    logAllMethods(this);
    this.setState({dono:'notfunk'});
  }
  render() {
    console.log(this.state);
    return (
      <div className='lel' onClick={this.s.bind(this)}>
        <h2>{this.state.dono}</h2>
      </div>
    );
  }
}
