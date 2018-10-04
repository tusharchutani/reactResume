import React, { Component } from 'react';
import './style.css';

export class Heading extends Component {
  render() {
    return (
        <h1>
          {this.props.iconClass && <span/>}
          {this.props.title}
        </h1>);
  }
}


export class SubHeading extends Component {
    
    render() {
      return (
        <div>
          
          <h2 class="subHeading">
            {this.props.title}
            {this.props.link &&            
            <a class="subHeading" href={this.props.link}>
              <i class={this.props.iconClass}></i>
            </a>}
          </h2>

      </div>);
  }
}