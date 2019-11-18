import React from 'react';
import './ProjectCardL.css';

const cardL = (props) => {
  return (
    <section className = {props.bga}>
      <div className = 'imageL'>
        <a href={props.projectLink} target="_blank">
          <img src={props.projectImage}/>
        </a>
      </div>
      <div className = 'contentL'>
        <h4>{props.title}</h4>
        <p>
          <strong>Tools Used: {props.techUsed}</strong>
          <br/>
          <br/>
          {props.description}

          </p>
          <div className = 'gitHubIcon'>
            <a href={props.githubLink} target='_blank'>
              <img src={props.gitHubIcon} />
            </a>
          </div>

      </div>

    </section>
  )
}

export default cardL;
