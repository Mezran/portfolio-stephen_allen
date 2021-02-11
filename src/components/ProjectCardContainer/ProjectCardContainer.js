import React from 'react'
import './ProjectCardContainer.css'

import ProjectCardL from '../ProjectCardL/ProjectCardL.js';
import ProjectCardR from '../ProjectCardR/ProjectCardR.js';

import GitHubIcon from '../../assets/images/github-logo.png';
import PetLife from '../../assets/images/PetLife.png';
import HearthstoneHelper from '../../assets/images/hearthstoneHelper.jpg';
import LIRIBot from '../../assets/images/LIRIBot.jpg';

const projectCardContainer = (props) => {
  return(
    <div className="cardContainer">
      <ProjectCardL
        projectLink='https://github.com/Mezran/Pet-Life'
        projectImage={PetLife}
        title='Pet Life'
        techUsed='React.js, Express.js, Node.js, Sass, MongoDB'
        description='Application designed to assist in tracking health information, doctors visits, and sitters for pets.'
        githubLink='https://github.com/Mezran/Pet-Life'
        gitHubIcon={GitHubIcon}
        bga="bg1"
      />
      <ProjectCardR
        projectLink='https://github.com/Mezran/Hearthstone-Helper'
        projectImage={HearthstoneHelper}
        title='Hearthstone Helper'
        techUsed='HTML, CSS, Twitch.tv API, Hearthstone card database API'
        description='Application designed to assist help teach new players the rules of the popular card game Hearthstone.'
        githubLink='https://github.com/Mezran/Hearthstone-Helper'
        gitHubIcon={GitHubIcon}
        bga='bg3'
      />
      <ProjectCardL
        projectLink='https://github.com/Mezran/LIRIBot'
        projectImage={LIRIBot}
        title='LIRIBot'
        techUsed='Node.js, Mac Terminal, Spotify API, OMDB API'
        description='LIRIBot is a command line application designed to read a text file and search Spotify or the Open Movie Database (OMDB) for songs by name and movies by title.'
        githubLink='https://github.com/Mezran/LIRIBot'
        gitHubIcon={GitHubIcon}
        bga="bg5"
      />
    </div>

  )
}

export default projectCardContainer;
