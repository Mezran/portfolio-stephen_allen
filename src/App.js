import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Landing from './components/Landing/Landing.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import ProjectCardContainer from './components/ProjectCardContainer/ProjectCardContainer.js'

import Skills from './components/Skills/Skills.js'
import Footer from './components/Footer/Footer.js'

import Background from './assets/images/background-1.jpg';



class App extends Component{

  render(){
    return(
    <>
      <NavBar/>
      <Landing
      title='Stephen Allen'
      content='Full Stack Developer'
      image = {Background}
      />
      <Jumbotron
        title='About Me'
        content="Full-stack web developer with a bachelor's degree in Computer Science from Kennesaw State University. Recently earned a certificate in Full Stack development from Georgia Tech, with newly developed skills in React.js, JavaScript, CSS, and responsive web development. As a go-to problem solver for a team of five, we recently created a single page, MERN app for keeping track of pets health information, prescriptions, doctors' visit information, and pet sitters. Excited to use my skills and programming techniques to best serve users."
       />
      <ProjectCardContainer />

      <Skills />

      <Footer />
    </>
    )
  }
}


export default App;
