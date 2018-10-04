import React, { Component } from 'react'
import { Heading, SubHeading } from '../components/titles';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import './style.css';
import { withStyles } from '@material-ui/core';

const style = {
  chipTitle:{
      backgroundColor:'#006e9c',
      margin:'3px',
      color:'white',
      fontSize:'15px'
  },
  progressBar:{
    backgroundColor:'red'
  }
}


class SkillSection extends Component {
  render() {
    return (
      <div>
        <Heading title="Skill overview"/>
        <div id="skillsDescriptionContainer" class="descriptionContainer">
          {this.props.skills.map(skill=>
              
                  (<Chip
                  style={style.chipTitle}
                  label={skill}
                />)
          )}
        </div>
      </div>
    )
  }
}

class Languages extends Component {
  render(){
    const { classes } = this.props;

    return (
      <div id="languageSection">
        <Heading title="Languages"/>
        <div id="languageContainer" class="descriptionContainer">
          {this.props.languages.map(language=>(
            <div id="language">
              {language.language}:
              <LinearProgress id={language} 
              style={{height:'7px'}}
              variant="determinate" 
              value={language.comptence}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const LanguageSection = withStyles(style)(Languages)

export {LanguageSection, SkillSection}