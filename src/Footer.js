import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className = "footerarea">
        <div className = "footarea__top">
        <p>Back to top</p>
        </div>
        <div className= "footerarea__links">
        <div className = "footerarea__linkarea">
          <div><h4>Get to know us</h4>
         <div>About us</div>
         <div>Careers</div>
         <div>Press Release</div>
         <div>Gift a Smile</div>
        </div></div>
        <div className = "footerarea__linkarea">
        <div><h4>Connect with Us </h4>
         <div>Instagram</div>
         <div>Facebook</div>
         <div>Twitter</div>
         <div>Telegram</div>
        </div>
        </div>
        <div className = "footerarea__linkarea">
        <div><h4>Let Us Help You</h4>
         <div>Covid-19 Assistance</div>
         <div>Your Account</div>
         <div>Return Centre</div>
         <div>Amazon App Download</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
