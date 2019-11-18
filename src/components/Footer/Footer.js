import React from 'react'
import './Footer.css'

import GitHub from '../../assets/images/github-logo.png';
import LinkedIn from '../../assets/images/linkedin.png';
import Email from '../../assets/images/email.png';
import Resume from '../../assets/images/writing.png';

const footer = (props) => {
  return (
    <footer className = 'footer'>
      <div className='box'>
        <a href="https://github.com/Mezran" target='_blank'>
          <img src = {GitHub}/>
        </a>
      </div>
      <div className='box'>
        <a href='https://www.linkedin.com/in/stephen-taylor-allen/' target='_blank'>
          <img src = {LinkedIn} />
        </a>
      </div>
      <div className='box'>
        <a href = "mailto: staylorallen@gmail.com">
          <img src = {Email} />
        </a>
      </div>
      <div className='box'>
        <a href = 'https://docs.google.com/document/d/1Qyjz0hgXIAk4K1FdOonb_CEgFR1Xa_OsyCkVxkiOFuw/edit?usp=sharing' target='_blank'>
          <img src = {Resume} />
        </a>
      </div>
    </footer>
  )
}

export default footer;
