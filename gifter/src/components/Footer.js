import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            {/* <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link> */}
            <Link to='/'>About</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Contact</Link>
            {/* <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.linkedin.com/in/fernando-bloedorn-088b0965/' target='_blank'>Linkedin</a>
            <a href='https://www.instagram.com/fernandobloedorn/' target='_blank'>Instagram</a>
            <a href='https://www.facebook.com/fernando.bloedorn/' target='_blank'>Facebook</a>
            {/* <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        {/* <div class='social-media-wrap'> */}
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small> */}
          <center>
          <div class='social-icons'>
            <a class='social-icon-link linkedin' href='https://www.linkedin.com/in/fernando-bloedorn-088b0965/' target='_blank' aria-label='Likedin' >
              <i class='fab fa-linkedin' />
            </a>
            <a class='social-icon-link instagram' href='https://www.instagram.com/fernandobloedorn/' target='_blank' aria-label='Instagram' >
              <i class='fab fa-instagram' />
            </a>
            <a class='social-icon-link facebook' href='https://www.facebook.com/fernando.bloedorn/' target='_blank' aria-label='Facebook' >
              <i class='fab fa-facebook-f' />
            </a>
            
            
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
          </center>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Footer;