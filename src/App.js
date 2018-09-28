import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './header';
import KeyComptency from './keyCompetencies';
import ProfessionalExperience from './professionalExperience';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { Heading } from './components/titles';

class App extends Component {
  componentWillMount(){
    library.add(faStroopwafel);
  }


  render() {
    return (
      <div className="resumeWrapper">
        <Header/>
        <div class="contentWrapper">
          <KeyComptency keyCompetencies={resumeDataJson.keyCompetencies}/>
          <ProfessionalExperience professionalExperience={resumeDataJson.professionalExperience}/>
        </div>
      </div>
    );
  }
}

const resumeDataJson = {
  keyCompetencies:[
    'Developed applications for the iOS platform using Objective-C and Javascript',
    'Proficient in HTML, JavaScript, CSS, C# and Java',
    'Strong grip on object-oriented principles',
    'Experience with refactoring code', 
    'Exposed to CUDA and other parallel computation models',
    'Experience with unit testing frameworks such as NUnit, Jasmine',
    'Knowledge of SQL, relational algebra and normalization of databases',
    'Automated iOS test cases using Appium',
    'Working knowledge of Unix shell (Bash)'
  ],
  professionalExperience:[
    {
      title:'UBC Farm – Lead software developer',
      duration:'September 2017 - present',
      description:'Working on an open source research project to manage daily farm activities. Involved inarchitecture, UI, testing and full stack development of the application.',
      keyPoints:
      ['Involved in technical analysis, story break down and architecture design',
        'Developed and tested features for the application from scratch for both the front and backend of the application',
        'Refactored the entire application for code reusability',
        'Skills used: NodeJS, React, MaterialUI, Javascript, object-oriented design']
    }
  ]

}

export default App;
