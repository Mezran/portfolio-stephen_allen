import React from 'react'
import './Landing.css';

const landing = (props) => {
  return (
    <section className='landing' >
      <div className='inner'>
        <h2 className='landingHeader'>{props.title}</h2>
        <p className='LandingContent'>{props.content}</p>

        <a className = 'LearnMore' href='#aboutMe'>Learn More</a>
      </div>
    </section>
  )
}

export default landing;
