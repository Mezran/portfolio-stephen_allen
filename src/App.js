import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Landing from './components/Landing/Landing.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import ProjectCardL from './components/ProjectCardL/ProjectCardL.js';
import ProjectCardR from './components/ProjectCardR/ProjectCardR.js';

import GitHubIcon from './assets/images/GitHubIcon.png';
import PetLife from './assets/images/PetLife.png';

class App extends Component{

  render(){
    return(
      <>
      <NavBar/>
      <Landing
      title='Stephen Allen'
      content='Full Stack Developer'/>
      <Jumbotron
        title='About Me'
        content="Full-stack web developer with a bachelor's degree in Computer Science from Kennesaw State University. Recently earned a certificate in Full Stack development from Georgia Tech, with newly developed skills in React.js, JavaScript, CSS, and responsive web development. As a go-to problem solver for a team of five, we recently created a single page, MERN app for keeping track of pets health information, prescriptions, doctors' visit information, and pet sitters. Excited to use my skills and programming techniques to best serve users."
       />
      <ProjectCardL
        projectLink='https://pet-life-2019.herokuapp.com'
        projectImage={PetLife}
        title='Pet Life'
        techUsed='React.js, Express.js, Node.js, Sass, MongoDB'
        description='Application designed to assist in tracking health information, doctors visits, and sitters for pets. JAHSDKJHAGKSDJHAG SKJDH AGKJSD GKAJDG KJA GDKA GKDJA GKJD GAKJHDGKAJHDG KAJGD KJASH DKJSA'
        githubLink='https://github.com/Mezran/Pet-Life'
        gitHubIcon={GitHubIcon}
      />
      <ProjectCardR
        projectLink='https://pet-life-2019.herokuapp.com'
        projectImage={PetLife}
        title='Pet Life'
        techUsed='React.js, Express.js, Node.js, Sass, MongoDB'
        description='Application designed to assist in tracking health information, doctors visits, and sitters for pets. JAHSDKJHAGKSDJHAG SKJDH AGKJSD GKAJDG KJA GDKA GKDJA GKJD GAKJHDGKAJHDG KAJGD KJASH DKJSA'
        githubLink='https://github.com/Mezran/Pet-Life'
        gitHubIcon={GitHubIcon}
      />


       </>
    )
  }
}


export default App;
