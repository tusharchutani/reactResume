import React, { Component } from 'react';
import './style.css';

export class Heading extends Component {
  render() {
    return (
        <h1>
          <i class={this.props.iconClass ? this.props.iconClass : ''}></i>&nbsp;{this.props.title}
        </h1>);
  }
}


export class SubHeading extends Component {
    
    render() {

      return (<h2>{this.props.title}</h2>);
    }
  }