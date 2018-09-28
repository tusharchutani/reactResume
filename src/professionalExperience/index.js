import React, { Component } from 'react'
import { Heading, SubHeading } from '../components/titles';

export default class ProfessionalExperience extends Component {
  render() {
    return (
      <div>
        <Heading iconClass="fas fa-laptop-code" title="Professional experience"/>
        {this.props.professionalExperience.map((experience)=>{

          return (
            <SubHeading title={experience.title}/>
          );

        })}
      </div>
  
    )
  }
}
