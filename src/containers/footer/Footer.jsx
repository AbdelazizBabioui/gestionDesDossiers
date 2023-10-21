import React from 'react';
import gpt3Logo from '../../assets/flag.png';
import './footer.css'; 

const Footer = () => (
  <div className="gpt3__footer section__padding" id="lfooter">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">à propos</h1>
    </div>

   {/*  <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>MAROC <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Liens</h4>
        <p>Reseaux sociaux</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Adress</h4>
        <p>Rabat K12 182 Agdal</p>
        <p>0522295703</p>
        <p>info@agenceUrbain.ma</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Agence Urbaine de Maroc. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;