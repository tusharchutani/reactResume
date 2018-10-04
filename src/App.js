import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './header';
import KeyComptency from './keyCompetencies';
import Experience from './experience';
import GeneralSection from './general';
import { SkillSection, LanguageSection} from './skillOverview';
import Footer from './components/footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    primary:{
      main:"#006e9c"
    },
    secondary:{
        main:"#3fb7ea"
    },
    accent:{
      main:"#3F4448"
    }
  }
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="resumeWrapper">
          <Header/>
          <div class="contentWrapper">
          <Grid container spacing={0}>
            <Grid id="mainCotentGrid" container sm={9}>
              <Grid item>
                <KeyComptency keyCompetencies={resumeDataJson.keyCompetencies}/>
              </Grid>
              <Grid item>
                
              </Grid>              
              <Grid item>
                <Experience isProfessionalExperience={true} experiences={resumeDataJson.professionalExperience}/>
              </Grid>
              <Grid item>
                <Experience isProfessionalExperience={false} experiences={resumeDataJson.projects}/>
              </Grid>
            </Grid>

            <Grid id="sideContentGrid" style={{height:'100%'}} spacing={24} container sm={3}>
              <Grid item>
                <SkillSection skills={resumeDataJson.skills}/>
              </Grid>
              <Grid item>
                <GeneralSection title="Education" data={resumeDataJson.education}/>
              </Grid>
              <Grid item>
                <GeneralSection title="Interests" data={resumeDataJson.interests}/>
              </Grid>
              <Grid item>
                <LanguageSection languages={resumeDataJson.languages}/>
              </Grid>

            </Grid>

          </Grid>
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
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
      title:'UBC Farm – Lead software developer (Remote)',
      duration:'September 2017 - August 2018',
      description:'Working on an open source research project to manage daily farm activities. Involved inarchitecture, UI, testing and full stack development of the application.',
      keyPoints:
      ['Involved in technical analysis, story break down and architecture design',
        'Developed and tested features for the application from scratch for both the front and backend of the application',
        'Refactored the entire application for code reusability',
      ],
      skillsUsed:'NodeJS, React, MaterialUI, Javascript, object-oriented design'
    },
    {
      title:'MOK Technologies – Freelance full stack developer',
      duration:'July 2017 – January 2018',
      description:'Worked as a mobile app developer for a startup based out of Vancouver. Involved in business development, UI development and full stack development of an event sharing mobile application for both iOS and Android.',
      keyPoints:[
        'Involved in technical analysis, story break down, architecture and UI design of the application',
        'Involved in full stack development of the iOS and Android application with front end in Reactnative and backend in NodeJS and MongoDB.',
        'Enforced best coding practices',
        'Implemented and maintained RESTful API for the event sharing product in NodeJS.',
      ],
      skillsUsed:'Reactnative, CSS, JavaScript, NodeJS, object-oriented design'
    },
    {
      title:'Vision Critical, Vancouver HQ – Software Engineer',
      duration:'Apr 2016 – Dec 2016',
      description:'Worked as a software engineer intern at Vision Critical. Involved in analysis and implementation of features in rich .Net and HTML5 application with RESTful API.',
      keyPoints:[
        'Involved in technical analysis, estimation and development of features.',
        'Developed front-end utilizing JQuery, company’s internal UI library and AngularJS.',
        'Implementing and maintaining RESTful API for the survey product in C#.',
        'Developed and maintained JavaScript and C# unit tests.'
      ],
      skillsUsed:'HTML, CSS, JavaScript, AngularJS, C#, object-oriented design'
    },
    {
      title:'ABB Enterprise Software – Software Developer',
      duration:'Apr 2015 – Dec 2015',
      description: 'Instrumental in developing Service Suite mobile applications (for iOS and Android) using object-oriented design in many different technology stacks. Responsibilities included but were not limited to the following:',
      keyPoints:[
        'Developed mobile app features using Cordova and Sencha touch (Javascript) Developed and maintained test automation Appium framework for iOS app',
        'Set up of Linux development environments and servers'
      ],
      skillsUsed:'HTML, CSS, Javascript, Java, object-oriented design, Sencha touch, Appium'

    }
  ],
  projects:[
    {
      title:'Meet up clone',
      description: 'Developed a cross platform (iOS and Android) clone for the popular social app Meet Up. Application is live on the App Store and can be used',
      skillsUsed:'React-native, NodeJS, TypeScript, Material Design',
      github:false,
      link:'https://itunes.apple.com/us/app/spot-never-get-bored/id1332449364?mt=8'
    },{
      title:'DNS client',
      description: 'Instrumental in developing Service Suite mobile applications (for iOS and Android) using object-oriented design in many different technology stacks. Responsibilities included but were not limited to the following:',
      skillsUsed:['Java', 'Javascript','Angular'],
      github:true,
      link:'google.com'
    },{
      title:'Remote Tribe website',
      description:'Developed a website for a small venture that arranges travels for location independent workers.',
      github:false, 
      link:'remotetribe.net',
      skillsUsed:'CSS,Wordpress,Elementor'
    }
  ],
  education:{
    subHeading:'BSc in Computer Science',
    description:'University of British Columbia graduated 2017'
  },
  interests:{
    lists:['Avid traveller', 'Reading', 'Programming']
  },
  skills:[
    'JavaScript', 'HTML', 'CSS', 'SASS', 'React & Redux', 'React Native', 'Angular 6', 'Java', 'C#',
    'Object-oriented design', 'Relational Databases', 'SQL', 'Data structures and algorithms'
  ],
  languages:[
    {
      language:'English',
      comptence:100
    },
    {
      language:'Hindi',
      comptence:100
    },
    {
      language:'Punjabi',
      comptence:50
    }
  ]

}

export default App;
