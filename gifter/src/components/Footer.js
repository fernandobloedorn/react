import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

// https://react-icons.github.io/react-icons

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/about'>Sobre nós</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/contact'>Contato</Link>
          </div>
          <div class='footer-link-items'>
           <a href='https://www.instagram.com/fernandobloedorn/' target='_blank'><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;