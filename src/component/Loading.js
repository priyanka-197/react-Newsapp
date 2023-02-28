import React, { Component } from 'react';
import spinner from './Loading.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={spinner}alt='load'/> 
       </div>
    )
  }
}

export default Loading;