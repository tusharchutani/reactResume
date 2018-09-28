import React, { Component } from 'react';
import { SubHeading, Heading } from '../components/titles';

class KeyComptency extends Component{
    
    render(){
        return (
            <div>
                <Heading title="Key Comptencies" iconClass="fas fa-briefcase"/>
                <ul>
                {this.props.keyCompetencies.map((keyCompetencies)=><li>{keyCompetencies}</li>)}
                </ul>

            </div>
        );
    }

}

export default KeyComptency;