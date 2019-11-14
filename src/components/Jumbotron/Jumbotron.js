import React from 'react';
import './Jumbotron.css';

const jumbotron = (props) => {
  return (
    <section className = 'jumbotron' id='aboutMe'>
      <div className = 'inner'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      </div>
    </section>
  )
}

export default jumbotron;
