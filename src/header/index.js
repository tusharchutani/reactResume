import React, { Component } from 'react';
import logo from '../logo.svg';
import profilePic from '../profilepic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
import Icon from '@material-ui/core/Icon';

class Header extends Component {
    render(){
        return (
            <div class="headerContainer">
            <div class="contentWrapper headerContentWrapper">
                    <img src={profilePic} alt="profile_pic" className="profilePicture"/>
                    <div class="nameTitleContainer">
                        <div className="name"> Tushar <span class="seceondaryTitle">Chutani</span></div>
                        <div class="jobTitle">Full-stack <span class="seceondaryTitle">developer</span></div>
                    </div>
                    <div class="socialProfileContainer">
                    <table>
                        <tr>
                            <td><i class="fab fa-linkedin-in"></i> </td>
                            <td>Linked In</td>
                        </tr>
                        <tr>
                            <td> <i class="fas fa-envelope"></i> </td>
                            <td>tushar_chutani@yahoo.com</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-phone"></i></td>
                            <td>+1(604)754-7690</td>
                        </tr>
                        <tr>
                            <td><i class="fab fa-github"></i></td>
                            <td>github.com/tusharchutani</td>
                        </tr>
                    </table>
                    
                    </div>
                    </div>
            </div>
        
        );
    }
}

export default Header;