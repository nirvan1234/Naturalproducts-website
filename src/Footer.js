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
          <div><h4>know us</h4>
         <div>About us</div>
         <div>Careers</div>
         <div>Release</div>
         <div>Gift a Smile</div>
        </div></div>
        <div className = "footerarea__linkarea">
        <div><h4>Connect  </h4>
         <div>Instagram</div>
         <div>Facebook</div>
         <div>Twitter</div>
         <div>Telegram</div>
        </div>
        </div>
        <div className = "footerarea__linkarea">
        <div><h4> Help </h4>
         <div>Covid-19 </div>
         <div>Account</div>
         <div>Return </div>
         <div>App</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
