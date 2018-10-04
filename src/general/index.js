import React, { Component } from 'react'
import { Heading, SubHeading } from '../components/titles';

export default class GeneralSection extends Component {
  render() {
    return (
      <div>
        <Heading title={this.props.title}/>
        <div class="descriptionContainer">
          <SubHeading title={this.props.data.subHeading}/>
          <div style={{paddingLeft:'7px'}}>{this.props.data.description}
          {this.props.data.lists && <ul>
            {this.props.data.lists.map((item)=>(<li>{item}</li>))}
          </ul>}
        </div>
        </div>
      </div>
    )
  }
}
