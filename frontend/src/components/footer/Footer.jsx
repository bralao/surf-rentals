import React from 'react'
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import tripadvisor from '../assets/tripadvisor.png'

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-top">

        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="" />
            <p>
              Looking for a surfboard? Make a reservation and tells us where to deliver your rental - airport, hotel or top surf spots around lisbon such as Carcavelos, Ericeira, Guincho and Costa da Caparica. And have a unforgettable time surfing Portugal's waves.
            </p>
          </div>

          <div className="contacts">
            <div className="phone">
              <FontAwesomeIcon icon={faPhone}/>
              <p>+351 123 456 789</p>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope}/>
              <p>EMAIL</p>
            </div>
            <div className="directions">
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              <p>DIRECTIONS</p>
            </div>
          </div>
        </div>

        <div className="footer-center">
          <h4>RENT A BOARD IN 5 STEPS:</h4>
          <ol>
            <li>Browse and select a board;</li>
            <li>Add pickup details on checkout;</li>
            <li>Collect the board and pay us;</li>
            <li>Go surf Portugal's waves;</li>
            <li>Return the board where agreed;</li>
          </ol>
          <button onClick={()=>(alert("SIKE, there's no video.\nThe board will magically appear in your hands.\nA surfing fairy will delivery it!\nCheers brah!"))}>Watch the video tutorial.</button>
        </div>

        <div className="footer-right">
          <img href="https://www.tripadvisor.com/ " src={tripadvisor} alt="TripAdvisor" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>2024 Surf Rentals - Powered by <b>Ralão</b></p>
        <div className="social-media">
          <FontAwesomeIcon icon={faGithub} href="https://github.com/bralao"/>
          <FontAwesomeIcon icon={faLinkedin} href="www.linkedin.com/in/bernardoralao"/>
          <FontAwesomeIcon icon={faInstagram} href="https://www.instagram.com/bernardoralao/"/>
        </div>
        <p>Privacy Policy | Terms and Conditions</p>
      </div>

    </div>

  )
}

export default Footer
