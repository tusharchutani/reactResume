import React, { Component } from 'react'
import { Heading, SubHeading } from '../components/titles';
import Grid from '@material-ui/core/Grid';

export default class Experience extends Component {
  render() {
    return (
      <div>
        {this.props.isProfessionalExperience && <Heading iconClass="fas fa-laptop-code" title="Professional experience"/>}
        {!this.props.isProfessionalExperience && <Heading iconClass="fab fa-app-store" title="Projects"/>}
        {this.props.experiences.map((experience)=>{
        
          return (
            <div>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={7}>
                  {!experience.link && <SubHeading title={experience.title}/>}
                  {experience.link && experience.github && <SubHeading iconClass="fab fa-github" link={experience.link} title={experience.title}/>}
                  {experience.link && !experience.github && <SubHeading iconClass="fa-external-link-alt" link={experience.link} title={experience.title}/>}
                </Grid>
                <Grid item xs={12} sm={5}>
                    {experience.duration && <SubHeading title={experience.duration}/>}
                </Grid>
              </Grid>
              <div class="descriptionContainer">
                <span>{experience.description}</span>
                {experience.keyPoints && <ul>
                  {experience.keyPoints.map(keyPoint=>(<li>{keyPoint}</li>))}
                  {experience.keyPoints && experience.keyPoints.length != 0 && <li>
                    <i>
                      Skills used:{experience.skillsUsed}
                    </i>
                  </li>}
                </ul>}
                {(!experience.keyPoints || experience.keyPoints.length == 0) &&
                <div>
                  <span class="skills">
                      Skills used:{experience.skillsUsed}
                  </span>
                </div>}
              </div>
            </div>
          );

        })}
      </div>
  
    )
  }
}
